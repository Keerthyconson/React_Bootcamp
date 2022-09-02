import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function MultipleCakesContainer(props) {
  const { numberOfCakes, buyCake } = props;
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <h1>Cake Shop - Lavish!! </h1>
      <h1>Take as many as you want!</h1>
      <h5>Number of cakes : {numberOfCakes}</h5>
      <input
        type="number"
        placeholder="Take as many as you want!"
        max={numberOfCakes}
        min="0"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button className="multi-button" onClick={() => buyCake(number)}>
        Buy Cakes
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleCakesContainer);
