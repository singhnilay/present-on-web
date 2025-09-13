import { Features } from "@/components/Features";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Features />
      <Footer />
    </div>
  );
};

export default FeaturesPage;