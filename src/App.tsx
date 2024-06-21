import { useState, useEffect } from "react";

const App = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    isActive
      ? (interval = setInterval(() => {
          setMilliseconds(milliseconds + 10);
        }, 10))
      : clearInterval(interval);

    return () => clearInterval(interval);
  }, [isActive, milliseconds]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setIsActive(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${
      ms < 10 ? "0" : ""
    }${ms}`;
  };

  return (
    <div>
      <h1>{formatTime(milliseconds)}</h1>
      <button onClick={toggleActive}>{isActive ? "Pause" : "Start"}</button>
      {!isActive && <button onClick={resetTimer}>Reset</button>}
    </div>
  );
};

export default App;
