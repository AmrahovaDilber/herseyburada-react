import BestSellers from "../componets/ui/BestSellers";
import CategorySection from "../componets/ui/CategorySection";
import MusicExperience from "../componets/ui/MusicExperience";
import Services from "../componets/ui/Services";
import Sales from "../componets/ui/Sales";
import ExploreProducts from "../componets/ui/ExploreProducts";
import Api from "../componets/ui/Api";

export default function Home() {
  return (
    <div>
      <CategorySection></CategorySection>
      <Sales></Sales>
      <BestSellers></BestSellers>
      <MusicExperience></MusicExperience>
      <ExploreProducts></ExploreProducts>
      <Services></Services>
      <Api></Api>
    </div>
  );
}
