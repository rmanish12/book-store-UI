import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Loader from '../loader/Loader'
import "../../index.css";

const main = (props) => {

    const { state, onChangeHandler, onLoginHandler, isLoading, errorMessage } = props
    const { email, password } = state

  return (
    <div className="main">
      <Grid container justify="center">
        <Grid item xs={11} sm={6}>
          <div className="login-card">
            <Paper>
              <div className="brand-name-div">
                <span className="brand-name">The Book Store</span>
              </div>

              <form onSubmit={onLoginHandler}>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  className="login-field"
                  value={email}
                  onChange={onChangeHandler}
                />

                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  className="login-field"
                  value={password}
                  onChange={onChangeHandler}
                />

                <Button className="login-button" type="submit">LOGIN</Button>
              </form>

              <div className="error">{errorMessage}</div>

              <div className="forgot-password-div">
                <span className="forgot-password">Forgot Password?</span>
              </div>

              <Loader show={isLoading}/>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default main;
