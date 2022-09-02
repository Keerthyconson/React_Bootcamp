import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux";

function IcecreamContainer() {
  const numberOfIcecream = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Icecream Shop</h1>
      <h5>Number of icecreams : {numberOfIcecream}</h5>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
}

export default IcecreamContainer;
