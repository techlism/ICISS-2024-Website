import React, { useEffect, useState } from 'react';

const TimeLeftCounter = () => {
  const targetDate = new Date('December 20, 2024 00:00:00');
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{paddingTop:'15px'}}>
      <h3>Time Left:</h3>
      <p>{daysLeft} days</p>
    </div>
  );
};

export default TimeLeftCounter;
