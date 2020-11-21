import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Fetch from "./pages/fetch";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/fetch" component={Fetch} />

    </Switch>
  </BrowserRouter>
);

export default Routes;