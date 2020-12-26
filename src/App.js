import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <NewCakeContainer />
        <IceCreamContainer />
        <UserContainer /> */}
        test
      </div>
    </Provider>
  );
}

export default App;
