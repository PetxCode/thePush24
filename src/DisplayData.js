import React from "react";
import { useSelector } from "react-redux";

const DisplayData = ({ counter }) => {
  const myValue = useSelector((state) => state.myReducer.value);

  return (
    <div>
      <div>{myValue}</div>
    </div>
  );
};

export default DisplayData;
