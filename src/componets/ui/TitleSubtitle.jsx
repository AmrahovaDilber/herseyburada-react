export default function TitleSubtitle({  title, children }) {
  return (
    <div className="mb-6 md:mb-10">
      <div className="flex flex-col">
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
