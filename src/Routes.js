import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { PublicRoute } from './PublicRoute';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Category from "./pages/Category";
function Routes() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loi-404">
          <NotFound />
        </Route>
        <Route path="/the-loai/:slug">
          <Category />
        </Route>
        <Route path="/lien-he">
          <Contact />
        </Route>
        <Route path="/ve-chung-toi">
          <About />
        </Route>
        <PublicRoute path="/dang-nhap" component={Login}/>
        <PublicRoute path="/dang-ky" component={Signup}/>
        <PublicRoute path="/quen-mat-khau" component={Login}/>
        <Route path="/:slug" children={<PostDetail />} />
      </Switch>
  );
}

export default Routes;
