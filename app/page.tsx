import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { LocationSection } from "@/components/location-section"
import { ServicesGrid } from "@/components/services-grid"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PromoBanner } from "@/components/promo-banner"
import { PromotionsSection } from "@/components/promotions-section"
import { PromoModal } from "@/components/promo-modal"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import { LampOrderSection } from "@/components/lamp-order-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black pb-28">
      <Header />
      <PromoModal />
      <PromoBanner />
      <Navigation />

      <section id="home">
        <HeroCarousel />
      </section>

      {/* Lámparas por pedido */}
      <LampOrderSection />

      {/* Novedades desde /public/act1 */}
      <NewArrivalsSection />

      <LocationSection />

      <section id="services">
        <ServicesGrid />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="products">
        <ProductsSection />
      </section>

      <section id="promotions">
        <PromotionsSection />
      </section>

      <section id="instagram">
        <InstagramSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <Footer />
    </main>
  )
}
