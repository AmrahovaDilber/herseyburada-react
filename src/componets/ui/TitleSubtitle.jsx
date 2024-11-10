export default function TitleSubtitle({ subtitle, title, children }) {
  return (
    <div className="mb-6 md:mb-10">
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 md:space-x-[10px] mb-4 md:mb-[24px]">
          <div className="w-[10px] md:w-[20px] h-[20px] md:h-[40px] bg-[#FF7518] rounded-md" />
          <p className="text-sm md:text-base text-[#FF7518] font-semibold">{subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-[40px]">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-2xl md:text-4xl text-[#000000] relative after:absolute after:content-[''] after:w-[150px] after:h-[3px] after:bg-gradient-to-r from-[#FF7518] to-[#FFD200] after:bottom-[-10px] after:left-0 ">{title}</p>
          </div>
          <div className="self-end md:self-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
