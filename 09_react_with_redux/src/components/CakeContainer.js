import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  const { numberOfCakes, buyCake } = props;
  //   console.log("props : ", props);
  return (
    <div className="container">
      <h1>Cake Shop</h1>
      {/* Subscribe */}
      <h5>Number of Cakes : {numberOfCakes}</h5>
      {/* Dispatch */}
      <button onClick={buyCake}>Buy Cakes</button>
    </div>
  );
}

// Step 1
const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

// Step 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// Step 3

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
