import { StatsGrid } from "../componets/ui/StatsGrid";
import { AboutSection } from "../componets/ui/AboutSection";
import Services from "../componets/ui/Services";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <main className="w-[1200px] mx-auto pt-[40px] font-poppins">
      <div className="mb-[40px]">
        <Link to={'/'} className="opacity-50 hover:opacity-80">
          Home
        </Link>
        <span className="opacity-50 mx-[12px]">/</span>
        <Link to={'/about'}>About</Link>
      </div>
      <AboutSection />
      <StatsGrid />
      <Services></Services>
    </main>
  );
}
