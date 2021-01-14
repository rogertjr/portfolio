import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
// import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
