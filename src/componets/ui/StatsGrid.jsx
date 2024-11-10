import { statsData } from "../../data/categoriesData";
import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
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
