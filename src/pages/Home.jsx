import BestSellers from "../componets/ui/BestSellers";
import CategorySection from "../componets/ui/CategorySection";
import MusicExperience from "../componets/ui/MusicExperience";
import Services from "../componets/ui/Services";
import Sales from "../componets/ui/Sales";

export default function Home() {
  return (
    <div>
      <CategorySection></CategorySection>
      <Sales></Sales>
      <BestSellers></BestSellers>
      <MusicExperience></MusicExperience>
      <Services></Services>
    </div>
  );
}
