export default function TitleSubtitle({ subtitle, title, children }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-[10px] mb-[24px]">
          <div className="w-[20px] h-[40px] bg-[#FF7518] rounded-md" />
          <p className="text-[16px] text-[#FF7518] font-semibold">{subtitle}</p>
        </div>
        <div className="flex justify-between mb-[40px]">
          <div className="flex space-x-[87px] items-center">
            <p className="font-semibold text-[36px] text-[#000000]">{title}</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
