import { Impact } from "@/components/Impact";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Impact />
      <Footer />
    </div>
  );
};

export default ImpactPage;