// components/ConferenceCountdown.jsx
"use client";

import Countdown from "./Countdown";

const ConferenceCountdown = () => {
  return (
    <section className="py-8" style={{ backgroundColor: "#1F4522" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-[48px]">
            Conference Day
          </h3>
          <p className="text-center font-bold text-[28px]">
            30 May 2025
          </p>
          <p className="text-center font-bold text-[28px]">
            11.00 WIB
          </p>
        </div>
        {/* Right Side: Countdown Timer */}
        <div className="mt-4 md:mt-0">
          <Countdown textColor="#FFD449" />
        </div>
      </div>
    </section>
  );
};

export default ConferenceCountdown;
