import { Team } from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;