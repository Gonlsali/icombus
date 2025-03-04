// components/Countdown.jsx
"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Target: May 30, 2025 at 11:00 WIB equals May 30, 2025 at 04:00 UTC (WIB adalah UTC+7)
    const targetDate = new Date(Date.UTC(2025, 4, 30, 2, 0, 0));
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
      {/* Days */}
      <div className="text-center">
        <div
          className="font-bold text-4xl md:text-[96px]"
          style={{ color: "#FFD449" }}
        >
          {timeLeft.days}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Days</div>
      </div>
      {/* Hours */}
      <div className="text-center">
        <div
          className="font-bold text-4xl md:text-[96px]"
          style={{ color: "#FFD449" }}
        >
          {timeLeft.hours}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">Hours</div>
      </div>
      {/* Minutes */}
      <div className="text-center">
        <div
          className="font-bold text-4xl md:text-[96px]"
          style={{ color: "#FFD449" }}
        >
          {timeLeft.minutes}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">
          Minutes
        </div>
      </div>
      {/* Seconds */}
      <div className="text-center">
        <div
          className="font-bold text-4xl md:text-[96px]"
          style={{ color: "#FFD449" }}
        >
          {timeLeft.seconds}
        </div>
        <div className="text-white text-lg md:text-xl mt-2 md:mt-4">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default Countdown;
