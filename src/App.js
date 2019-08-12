import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
        {routes.map(route => (
          <Route exact path={route.path} component={route.component} />
        ))}
    </div>
  </Router>
);

export default App;
