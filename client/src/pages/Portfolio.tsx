import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { ExtraCurricular } from "@/components/ExtraCurricular";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Portfolio } from "@shared/schema";

export default function PortfolioPage() {
  const { data: portfolio, isLoading, error } = useQuery<Portfolio>({
    queryKey: ["/api/portfolio"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-2">Unable to load portfolio</h2>
          <p className="text-muted-foreground">
            {error instanceof Error ? error.message : "Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About data={portfolio.about} />
        <Projects data={portfolio.projects} />
        <Skills data={portfolio.skills} />
        <Achievements data={portfolio.achievements || []} />
        <ExtraCurricular data={portfolio.extraCurricular || []} />
        <Contact data={portfolio.contact} />
      </main>
      <Footer contact={portfolio.contact} />
    </div>
  );
}
