import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import store from "./store";
import WebsitePanel from "./components/WebsitePanel";
import TopicPanel from "./components/TopicPanel";
import AddWebsitesPanel from "./components/AddWebsitesPanel";
import AddTopicsPanel from "./components/AddTopicsPanel";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "600px",
            width: "500px",
            padding: "2% 0",
          }}
        >
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <WebsitePanel />
                <TopicPanel />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/add-websites"
            render={() => (
              <React.Fragment>
                <AddWebsitesPanel />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/add-topics"
            render={() => (
              <React.Fragment>
                <AddTopicsPanel />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
