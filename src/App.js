import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Components/utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
