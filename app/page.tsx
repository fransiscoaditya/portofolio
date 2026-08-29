import { Hero } from "@/components/hero/Hero";
import { WorkSection } from "@/components/work/WorkSection";
import { 
  IdentitySection, 
  ExpertiseSection,
  TechSection,
  BooksSection,
  ExperienceSection,
  EducationSection,
  CurrentlySection
} from "@/components/info/InfoSection";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdentitySection />
      <WorkSection />
      <ExpertiseSection />
      <TechSection />
      <BooksSection />
      <ExperienceSection />
      <EducationSection />
      <CurrentlySection />
      <Footer />
    </>
  );
}
