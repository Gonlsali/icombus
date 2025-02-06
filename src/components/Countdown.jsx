// components/Countdown.jsx
"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Target: May 30, 2025 at 11:00 WIB equals May 30, 2025 at 04:00 UTC (WIB is UTC+7)
    const targetDate = new Date(Date.UTC(2025, 4, 30, 4, 0, 0));
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
    <div className="flex justify-center space-x-6">
      {/* Days */}
      <div className="text-center">
        <div className="font-bold text-[96px]" style={{ color: "#FFD449" }}>
          {timeLeft.days}
        </div>
        <div className="text-white">Days</div>
      </div>
      {/* Hours */}
      <div className="text-center">
        <div className="font-bold text-[96px]" style={{ color: "#FFD449" }}>
          {timeLeft.hours}
        </div>
        <div className="text-white">Hours</div>
      </div>
      {/* Minutes */}
      <div className="text-center">
        <div className="font-bold text-[96px]" style={{ color: "#FFD449" }}>
          {timeLeft.minutes}
        </div>
        <div className="text-white">Minutes</div>
      </div>
      {/* Seconds */}
      <div className="text-center">
        <div className="font-bold text-[96px]" style={{ color: "#FFD449" }}>
          {timeLeft.seconds}
        </div>
        <div className="text-white">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
