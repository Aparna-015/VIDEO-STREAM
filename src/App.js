import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Components/utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./Components/Maincontainer";
import Watchpage from "./Components/Watchpage";


const appRouter= createBrowserRouter([{

  path :"/",
  element :<Body/>,
  children :[

    {
      path: "/",
      element :<Maincontainer/>
    },

    
    {
      path: "watch",
      element :<Watchpage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
