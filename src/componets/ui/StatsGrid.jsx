import { statsData } from "../../data/categoriesData";
import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24 px-4 sm:px-8 lg:px-16">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          iconSrc={stat.iconSrc}
          value={stat.value}
          description={stat.description}
        />
      ))}
    </div>
  );
}
