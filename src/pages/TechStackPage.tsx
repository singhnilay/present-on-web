import { TechStack } from "@/components/TechStack";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TechStackPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TechStack />
      <Footer />
    </div>
  );
};

export default TechStackPage;