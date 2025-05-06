"use client";

import { useEffect, useState } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<any | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return null;
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center py-20">
      <p className="text-xl uppercase tracking-wide text-gray-500">
        LET&apos;S CELEBRATE TOGETHER ON OUR SPECIAL DAY IN
      </p>
      <h2 className="text-4xl font-semibold text-black mt-2">5 JULY 2025</h2>

      {timeLeft ? (
        <div className="mt-6 flex justify-center space-x-6">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      ) : (
        <p className="text-xl text-gray-600 mt-4">The event has started!</p>
      )}
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-black text-5xl font-semibold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-xs text-gray-500 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}