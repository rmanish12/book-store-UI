import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Main from "../../components/main/Main";

import { onLogin } from "../../store/actions/auth";

const main = (props) => {
  const { onLogin, auth } = props;
  const { isLoading, errorMessage, isAuthenticated } = auth;

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    isAuthenticated ? <Redirect to="/home"/> : null
  }, [isAuthenticated])

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

    onLogin(state);
  };

  return (
    <>
      <Main
        state={state}
        onChangeHandler={onChangeHandler}
        onLoginHandler={onLoginHandler}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
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
    onLogin: (credentials) => dispatch(onLogin(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(main);
