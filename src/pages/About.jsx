import { StatsGrid } from "../componets/ui/StatsGrid";
import { AboutSection } from "../componets/ui/AboutSection";
import Services from "../componets/ui/Services";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="w-full  mx-auto pt-10 font-poppins">
      <div className="mb-10">
        <Link to="/" className="opacity-50 hover:opacity-80">
          Ana Səhifə
        </Link>
        <span className="opacity-50 mx-3">/</span>
        <Link to="/about">Haqqımızda</Link>
      </div>
      <AboutSection />
      <StatsGrid />
      <Services />
    </main>
  );
}
