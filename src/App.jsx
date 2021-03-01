import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./containers/main";
import Home from "./containers/home";

import { verifyUser } from "./store/actions/auth";

import "./index.css";

const App = (props) => {
  const { verifyUser } = props;
  const { isAuthenticated } = props.auth;

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (isAuthenticated ? <Redirect to="/home" /> : <Main />)}
        />

        <Route
          path="/home"
          render={() => (isAuthenticated ? <Home /> : <Redirect to="/" />)}
        />

      </Switch>
      {/* <Home /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyUser: () => dispatch(verifyUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
