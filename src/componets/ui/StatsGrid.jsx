import { StatCard } from "./StatCard";

export function StatsGrid() {
  const stats = [
    { iconSrc: "/store.svg", value: "10.5k", description: "Sallers active on our site" },
    { iconSrc: "/store.svg", value: "33k", description: "Monthly Product Sale" },
    { iconSrc: "/store.svg", value: "45.5k", description: "Customers active on our site" },
    { iconSrc: "/store.svg", value: "25k", description: "Annual gross sale on our site" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
      {stats.map((stat, index) => (
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
