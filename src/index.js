import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealPlan from "./Components/MealPlan";
import About from "./Components/About";
import CaloricMaintenance from "./Components/CaloricMaintenance";
import Header from "./Components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/CaloricMaintenance" component={CaloricMaintenance} />
        <Route path="/MealPlan" component={MealPlan} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
