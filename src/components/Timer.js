import { useEffect } from "react";

const Timer = ({ dispatch, remainingSeconds }) => {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds / 60;
  useEffect(() => {
    // every interval return an unique id
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    // clean up function
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"} {mins} :{secs < 10 && "0"} {secs}{" "}
    </div>
  );
};

export default Timer;
