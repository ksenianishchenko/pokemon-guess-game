import React, { useEffect, useState } from "react";

import "./styles.scss";


const Timer = () => {

  const [count, setCount] = useState(5);

  useEffect(() => {

    let interval = setInterval(() => {
      if (count !== 0) {
        setCount(count - 1);
      }
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
    }

    return (() => {
      clearInterval(interval);
    });
  }, [count]);

  return <div className="timer">
    <span>{count}</span>
  </div>
}

export default Timer;