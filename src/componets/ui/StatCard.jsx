export function StatCard({ iconSrc, value, description }) {
  return (
    <div className="py-[20px] h-[230px] flex flex-col items-center border border-black/30 rounded-[4px] shadow-lg cursor-pointer group ">
      <div className="size-[70px] shrink-0 mb-[24px] bg-[#c1c1c1] rounded-full flex justify-center items-center ">
        <div className="size-[55px] bg-black rounded-full flex justify-center items-center">
          <figure className="px-[3px] py-[5px] size-[40px]">
            <img src={iconSrc} alt="" />
          </figure>
        </div>
      </div>
      <span className="mb-[12px] tracking-[4%] text-[32px] font-bold">
        {value}
      </span>
      <p>{description}</p>
    </div>
  );
}
