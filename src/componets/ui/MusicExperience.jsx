import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MusicExperience() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2024-12-31T23:59:59");
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <section>
      <div className="bg-[#000000]  h-[500px] flex my-[71px] ">
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
                <p className="font-bold text-[16px] text-[#000000]">
                  {" "}
                  <span>{timeLeft.hours}</span>
                </p>
                <p className="font-normal text-[11px] text-[#000000]">Saat</p>
              </div>
            </div>
            <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-[16px] text-[#000000]">
                  {timeLeft.minutes}
                </p>
                <p className="font-normal text-[11px] text-[#000000]">Deqiqe</p>
              </div>
            </div>
            <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-[16px] text-[#000000]">
                  {timeLeft.seconds}
                </p>
                <p className="font-normal text-[11px] text-[#000000]">Saniye</p>
              </div>
            </div>
            {/* <div className="size-[62px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-[16px] text-[#000000]">23</p>
            <p className="font-normal text-[11px] text-[#000000]">Saniyə</p>
          </div>
        </div> */}
          </div>
          <Link to="/products/Elektronika">
            <button className="w-[171px] h-[56px] bg-[#00FF66] hover:bg-[#40A860]  rounded-md text-center text-[#FAFAFA] mt-[40px]">
              İndi Al
            </button>
          </Link>
        </div>
        <div className="w-1/2 pt-[82px] pr-[60px]">
          <img src="/microphone.png" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
