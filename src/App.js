import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import ReposContainer from "./components/ReposContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ReposContainer />
      </div>
    </Provider>
  );
}

export default App;
