// components/Countdown.jsx
"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  // Calculate the remaining time until the target date
  const calculateTimeLeft = () => {
    // Target: May 30, 2025 at 11:00 AM WIB = May 30, 2025 at 04:00 AM UTC
    const targetDate = new Date(Date.UTC(2025, 4, 30, 4, 0, 0));
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      // If the date is passed, show zeros
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-6">
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div>Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div>Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div>Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
