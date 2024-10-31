import { useReducer } from "react";

const reducer = (state, action) => {
  /* 
  // state - here is the previous state
  // action - comes from dispatch() 
    if (action.type === "inc") return state + 1;
    if (action.type === "dec") return state - 1;
    if (action.type === "setCount" || action.type === "reset") {
      return action.payload;
  }
  */
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "defineStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
  }
};
const DateCounter = () => {
  /*  
  // dispatch - like an updater function
  // 0 - initial state
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
  */
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = () => {
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = (e) => {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    // setStep(Number(e.target.value));
    dispatch({ type: "defineStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default DateCounter;
