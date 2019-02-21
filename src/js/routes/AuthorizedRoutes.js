import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
class AuthorizedRoutes extends Component {
  render() {
    return localStorage.getItem("username") !== null &&
      localStorage.getItem("password") !== null ? (
      
        <Route
          path={this.props.path}
          component={this.props.component}
          {...this.props}
        />
      
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AuthorizedRoutes;
