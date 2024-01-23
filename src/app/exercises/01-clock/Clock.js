'use client';
import React from 'react';
import format from 'date-fns/format';
import Spinner from '../../../components/Spinner';


function Clock() {
  //const [time, setTime] = React.useState(null);
  const hasInitialValue = React.useRef(false);
  let initialTime = new Date();
  if (!hasInitialValue.current && typeof window !== "undefined") {
    initialTime = document.querySelector('.clock').textContent;
    hasInitialValue.current = true;
    console.log("initial value established, this runs only once thanks to Ref");
  }
  const [time, setTime] = React.useState(initialTime);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  /* <p className="clock">{time !== null ? format(time, 'hh:mm:ss.S a') : <Spinner />}</p> */
  return (
    <p className="clock">{typeof time !== "string" ? format(time, 'hh:mm:ss.S a') : time}</p>

  );
}

export default Clock;
