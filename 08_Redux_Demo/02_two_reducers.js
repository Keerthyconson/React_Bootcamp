const redux = require("@reduxjs/toolkit");
const { combineReducers } = require("@reduxjs/toolkit");
const configureStore = redux.configureStore;
// const { createStore } = require("redux");

// const combineReducers = redux1.combineReducers;

// Here we split the state & the reducer

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Buying cake",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Buying icecream",
  };
}

// 2 inital state
const cakeInitialState = {
  numberOfCakes: 10,
};

const icecreamInitialState = {
  numberOfIcecreams: 20,
};

// 2 reducers
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = configureStore({ reducer: rootReducer });
console.log(store.getState());
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
