import React from "react";
import { buyIcecream } from "../redux/icecream/icecreamActions";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  const { numberOfIcecreams, buyIcecream } = props;
  return (
    <div className="container">
      <h1>Icecream Shop</h1>
      <h5>Number of Icecreams : {numberOfIcecreams}</h5>
      <button onClick={buyIcecream}>Buy Icecream</button>
    </div>
  );
}

// Step 1: map state to props
const mapStateToProps = (state) => {
  return {
    numberOfIcecreams: state.icecream.numberOfIcecreams,
  };
};

// Step2 : map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
