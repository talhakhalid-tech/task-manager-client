import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "./history";

import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CreateTask from "./screens/CreateTask";
import IncompleteTasks from "./screens/IncompleteTasks";
import CompletedTasks from "./screens/CompletedTasks";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Create" exact component={CreateTask} />
            <Route path="/Incomplete" exact component={IncompleteTasks} />
            <Route path="/Completed" exact component={CompletedTasks} />
          </Switch>
        </div>
      </Router>
    </div>
  );
  // return <Login />;
  // return <Register />;
}

export default App;
