import { useEffect } from "react";

const Timer = ({ dispatch, remainingSeconds }) => {
  useEffect(() => {
    // every interval return an unique id
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    // clean up function
    return () => clearInterval(id);
  }, [dispatch]);
  return <div className="timer">{remainingSeconds}</div>;
};

export default Timer;
