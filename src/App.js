import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "./history";

import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/Login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
  // return <Login />;
  // return <Register />;
}

export default App;
