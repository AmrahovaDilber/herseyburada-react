import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimeBox } from "./TimeBox";
const MusicExperience = () => {

  const getTimeLeft = () => {
    const target = new Date("2024-12-31T23:59:59");
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
      minutes: Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)),
      seconds: Math.floor((diff % (60 * 1000)) / 1000),
    };
  };
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 
  return (
    <div className="bg-black my-[50px]  p-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-6">
          <span className="text-green-400 font-semibold">Categories</span>
          <h1 className="text-4xl text-white font-semibold">
            Enhance Your Music Experience
          </h1>
          <div className="flex gap-6">
            <TimeBox value={time.hours} label="Hours" />
            <TimeBox value={time.minutes} label="Minutes" />
            <TimeBox value={time.seconds} label="Seconds" />
          </div>

          <Link to="/products/Elektronika">
            <button className="w-[171px] h-[56px] bg-[#00FF66] hover:bg-[#40A860]  rounded-md text-center text-[#FAFAFA] mt-[40px]">
              İndi
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src="/microphone.png"
            alt="Microphone"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicExperience;
