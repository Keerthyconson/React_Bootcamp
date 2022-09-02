import "./App.css";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
