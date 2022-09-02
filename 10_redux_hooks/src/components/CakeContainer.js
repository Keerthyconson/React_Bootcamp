import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Cake Shop</h1>
      <h5>Number of cakes : {numberOfCakes}</h5>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
