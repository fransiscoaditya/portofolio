import type { Metadata } from "next";
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
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Info",
  description: siteConfig.description,
};

export default function InfoPage() {
  return (
    <>
      <div className="pt-32">
        <IdentitySection />
        <ExpertiseSection />
        <TechSection />
        <BooksSection />
        <ExperienceSection />
        <EducationSection />
        <CurrentlySection />
      </div>
      <Footer />
    </>
  );
}

