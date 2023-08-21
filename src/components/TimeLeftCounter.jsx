import React, { useEffect, useState } from 'react';

const TimeLeftCounter = () => {  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 20, 2024 00:00:00').getTime();

    const updateCounter = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCounter, 1000);

    updateCounter();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ paddingTop: '15px' }}>
      <h3>Time Left:</h3>
      <p>
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
      </p>
    </div>
  );
};

export default TimeLeftCounter;

