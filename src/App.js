import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormPage from "./Components/Form";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormPage} />
      </Switch>
    </Router>
  );
}

export default App;
