import { NextResponse } from "next/server"

// Campos que pediremos al Graph API: id, media_url, permalink
const FIELDS = ["id", "media_url", "permalink", "caption", "timestamp"].join(",")

// Cache simple en memoria del runtime para evitar rate limits durante dev
let cachedJson: unknown | null = null
let cachedAt = 0
const CACHE_MS = 1000 * 60 * 5 // 5 minutos

export async function GET() {
  try {
    const now = Date.now()
    if (cachedJson && now - cachedAt < CACHE_MS) {
      return NextResponse.json(cachedJson, { status: 200 })
    }

    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const userId = process.env.INSTAGRAM_USER_ID

    if (!accessToken || !userId) {
      // Sin credenciales: devolver estructura vacía pero válida
      return NextResponse.json({ posts: [] }, { status: 200 })
    }

    const url = `https://graph.instagram.com/${userId}/media?fields=${encodeURIComponent(
      FIELDS,
    )}&access_token=${encodeURIComponent(accessToken)}&limit=9`

    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: "upstream_error", detail: text }, { status: 502 })
    }
    const data = (await res.json()) as { data?: any[] }

    const posts = (data.data || [])
      .filter((m) => !!m.media_url && !!m.permalink)
      .map((m) => ({
        id: String(m.id),
        imageUrl: String(m.media_url),
        linkUrl: String(m.permalink),
        caption: m.caption ? String(m.caption) : "",
        timestamp: m.timestamp ? String(m.timestamp) : "",
      }))

    const payload = { posts }
    cachedJson = payload
    cachedAt = now
    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=300",
      },
    })
  } catch (err: unknown) {
    return NextResponse.json({ error: "unexpected", detail: String(err) }, { status: 500 })
  }
}





