import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Team } from "@/components/Team";
import { Impact } from "@/components/Impact";
import { Revenue } from "@/components/Revenue";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <TechStack />
      <Impact />
      <Team />
      <Revenue />
      <Footer />
    </div>
  );
};

export default Index;
