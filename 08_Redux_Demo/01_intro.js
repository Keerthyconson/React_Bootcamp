const redux = require("@reduxjs/toolkit");
const configureStore = redux.configureStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// We have to create an action creator which returns an action

function buyCake() {
  // action
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Adding another action",
  };
}

// Reducer
// We need to have a state

const initialState = {
  numberOfCakes: 10,
  numberOfIcecreams: 15,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    default:
      return state;
  }
};

//Responsibility 1 : holds application state
const store = configureStore({ reducer });
// Responsibility 2 : get the state of the application
console.log(store.getState());

// Responsibility 4 : Allow the app to subscribe to changes in the store
const unsubscribe = store.subscribe(() => {
  console.log("Updated state : ", store.getState());
});

// Responsibility 3 : State to be updated via dispatch method
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// buying icecream
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
// console.log(store.getState());

// Responsibility 5 : unsubscribe from the store
unsubscribe();
