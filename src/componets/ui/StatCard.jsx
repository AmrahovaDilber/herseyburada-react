export function StatCard({ iconSrc, value, description }) {
    return (
      <div className="py-[30px] h-[230px] flex flex-col items-center border border-black/30 rounded-[4px] shadow-lg cursor-pointer group hover:bg-[#ff7518] hover:text-white">
        <div className="size-[80px] shrink-0 mb-[24px] bg-[#c1c1c1] rounded-full flex justify-center items-center group-hover:bg-[#ff9e5d]">
          <div className="size-[58px] bg-black rounded-full flex justify-center items-center">
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
  