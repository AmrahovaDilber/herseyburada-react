import { StatsGrid } from "../componets/ui/StatsGrid";
import { AboutSection } from "../componets/ui/AboutSection";
import Services from "../componets/ui/Services";
export default function AboutPage() {
  return (
    <main className="w-[1200px] mx-auto pt-[40px] font-poppins">
      <div className="mb-[40px]">
        <a href="index.html" className="opacity-50 hover:opacity-80">
          Home
        </a>
        <span className="opacity-50 mx-[12px]">/</span>
        <a href="about.html">About</a>
      </div>
      <AboutSection />
      <StatsGrid />
      <Services></Services>
    </main>
  );
}
