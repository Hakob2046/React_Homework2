import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Start Timer");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Stop Timer");
    };
  }, []);

  return (
    <div className="text-lg font-medium text-gray-700">
      Passed {seconds} second
    </div>
  );
};

export default Timer;

