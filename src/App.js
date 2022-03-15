import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormPage from "./Components/Form";
import SuccesFormPage from "./Components/SuccesFormPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormPage} />
        <Route exact path="/succes" component={SuccesFormPage} />
      </Switch>
    </Router>
  );
}

export default App;
