export const TimeBox = ({ value, label }) => (
    <div className="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center">
      <span className="font-bold text-black">{value}</span>
      <span className="text-xs text-black">{label}</span>
    </div>
  );