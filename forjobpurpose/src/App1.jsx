import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber } from "./Action";

export const App1 = () => {
  const mystate = useSelector((state) => state.ChangeNumber);
  const dispatch = useDispatch();
  console.log("mota", dispatch);
  return (
    <div>
      <h1>Increment/Decrement</h1>
      <h4>using react and redux</h4>
      <button
        onClick={() => {
          dispatch(IncNumber());
        }}
      >
        +
      </button>
      <input type="text" value={mystate}></input>
      <button onClick={() => dispatch(DecNumber())}>-</button>
    </div>
  );
};

// export default App1;
