import { Hero } from "@/components/hero/Hero";
import { IdentitySection } from "@/components/info/InfoSection";
import { PageLinks } from "@/components/motion/PageLinks";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdentitySection />
      <PageLinks />
      <Footer />
    </>
  );
}
