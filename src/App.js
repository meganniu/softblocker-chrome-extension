import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";
import WebsitePanel from "./components/WebsitePanel";

function App() {
  return (
    <Provider store={store}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "300px",
          width: "500px",
          padding: "2% 0",
        }}
      >
        <WebsitePanel></WebsitePanel>
      </div>
    </Provider>
  );
}

export default App;
