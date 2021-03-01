import React from "react";

import { Grid, Paper, TextField } from "@material-ui/core";

import { Button } from "react-bootstrap";

import "../../../../index.css";

const addStore = (props) => {
  const {
    formFields,
    onChangeHandler,
    onResetHandler,
    onSubmitHandler,
  } = props;
  const {
    name,
    addressLine1,
    addressLine2,
    city,
    state,
    pinCode,
    errors,
  } = formFields;

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} sm={12}>
          <div>
            <Paper>
              <div className="add-store-label">Add New Store</div>
              <div>
                <TextField
                  variant="outlined"
                  type="text"
                  id="name"
                  name="name"
                  label="Name of the Store"
                  className="form-field"
                  error={errors.name}
                  helperText={
                    errors.name ? "Name of the store cannot be empty" : ""
                  }
                  value={name}
                  onChange={onChangeHandler}
                />
              </div>

              <div>
                <TextField
                  variant="outlined"
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  label="Address Line 1"
                  className="form-field"
                  error={errors.addressLine1}
                  helperText={
                    errors.addressLine1 ? "Address Line 1 cannot be empty" : ""
                  }
                  value={addressLine1}
                  onChange={onChangeHandler}
                />
              </div>

              <div>
                <TextField
                  variant="outlined"
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  label="Address Line 2"
                  className="form-field"
                  value={addressLine2}
                  onChange={onChangeHandler}
                />
              </div>

              <Grid container justify="center">
                <Grid item xs={12} sm={4}>
                  <div className="city-box">
                    <TextField
                      variant="outlined"
                      type="text"
                      id="city"
                      name="city"
                      label="City"
                      className="form-field"
                      error={errors.city}
                      helperText={errors.city ? "City cannot be empty" : ""}
                      value={city}
                      onChange={onChangeHandler}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <div>
                    <TextField
                      variant="outlined"
                      type="text"
                      id="state"
                      name="state"
                      label="State"
                      className="form-field"
                      error={errors.state}
                      helperText={
                        errors.state ? "State cannot be empty" : ""
                      }
                      value={state}
                      onChange={onChangeHandler}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <div className="pincode-box">
                    <TextField
                      variant="outlined"
                      type="number"
                      id="pinCode"
                      name="pinCode"
                      label="Pin Code"
                      className="form-field"
                      error={errors.pinCode}
                      helperText={
                        errors.pinCode ? "Pin Code cannot be empty" : ""
                      }
                      value={pinCode}
                      onChange={onChangeHandler}
                    />
                  </div>
                </Grid>
              </Grid>

              <hr />

              <div className="buttons-container">
                <Button
                  variant="warning"
                  className="inner-form-button"
                  onClick={onResetHandler}
                >
                  Reset
                </Button>
                <Button
                  variant="success"
                  className="inner-form-button"
                  onClick={onSubmitHandler}
                >
                  Add Store
                </Button>
              </div>
              {/* 
              <div className="text-center pd-1">
                <span className="color form-option" onClick={openLoginForm}>Already Registered?</span>
              </div> */}
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default addStore;
