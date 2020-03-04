import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
