import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IcecreamContainer from "./components/IcecreamContainer";
import MultipleCakesContainer from "./components/MultipleCakesContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer />
        <MultipleCakesContainer />
        <ItemContainer cake />
        <ItemContainer icecream />
      </div>
    </Provider>
  );
}

export default App;
