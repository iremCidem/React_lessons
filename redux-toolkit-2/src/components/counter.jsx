import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CountDown,
  CountUp,
  incrementByAmount,
  incre,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(CountUp());
        }}
      >
        UP
      </button>

      <button
        onClick={() => {
          dispatch(CountDown());
        }}
      >
        DOWN
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          dispatch(incre());
        }}
      >
        AMOUNT
      </button>
      <p>{count}</p>
    </div>
  );
}
