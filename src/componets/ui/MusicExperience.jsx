export default function MusicExperience() {
  return (
<section>
  <div className="bg-[#000000] w-[1200px] h-[500px] flex my-[71px] ">
    <div className="w-1/2 pt-[69px] pl-[56px]">
      <p className="font-semibold text-[16px] text-[#00FF66] mb-[32px]">
        Kateqoriyalar
      </p>
      <p className="font-semibold text-[48px] text-[#FAFAFA] w-[443px] mb-[32px]">
        Enhance Your Music Experience
      </p>
      <div className="w-[320px] flex items-center space-x-[24px]">
        <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-[16px] text-[#000000]">23</p>
            <p className="font-normal text-[11px] text-[#000000]">Gün</p>
          </div>
        </div>
        <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-[16px] text-[#000000]">23</p>
            <p className="font-normal text-[11px] text-[#000000]">Saat</p>
          </div>
        </div>
        <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-[16px] text-[#000000]">23</p>
            <p className="font-normal text-[11px] text-[#000000]">Dəqiqə</p>
          </div>
        </div>
        <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-[16px] text-[#000000]">23</p>
            <p className="font-normal text-[11px] text-[#000000]">Saniyə</p>
          </div>
        </div>
      </div>
      <button className="w-[171px] h-[56px] bg-[#00FF66] hover:bg-[#40A860]  rounded-md text-center text-[#FAFAFA] mt-[40px]">
        İndi Al
      </button>
    </div>
    <div className="w-1/2 pt-[82px] pr-[60px]">
      <img src="./assets/img/microphone.png" className="object-cover" />
    </div>
  </div>
</section>

  )
}
