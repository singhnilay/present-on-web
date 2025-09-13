import { Revenue } from "@/components/Revenue";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const RevenuePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Revenue />
      <Footer />
    </div>
  );
};

export default RevenuePage;