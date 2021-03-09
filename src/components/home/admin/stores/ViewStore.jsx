import React from "react";

import {
  Grid,
  Paper,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  Tooltip,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "react-bootstrap";
import Pagination from "../../../pagination/Pagination"

import "../../../../index.css";

const viewStore = (props) => {
  const { stores } = props;
  console.log("stores: ", stores);
  return (
    <>
      <div className="min-wd-100">
        <Grid container>
          <Grid item xs={12} sm={12}>
            <div>
              <Paper>
                
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <div>
                      <TextField
                        variant="outlined"
                        type="text"
                        id="name"
                        name="name"
                        label="Name of the Store"
                        className="form-field"
                        //   value={name}
                        //   onChange={onChangeHandler}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <div>
                      <TextField
                        variant="outlined"
                        type="text"
                        id="city"
                        name="city"
                        label="City"
                        className="form-field"
                        //   value={city}
                        //   onChange={onChangeHandler}
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
                        //   value={state}
                        //   onChange={onChangeHandler}
                      />
                    </div>
                  </Grid>
                </Grid>

                <hr />

                <div className="buttons-container">
                  <Button
                    variant="success"
                    className="inner-form-button"
                    //   onClick={onSubmitHandler}
                  >
                    Search
                  </Button>
                </div>
              </Paper>
            </div>
            <hr />
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                        // checked={rowCount > 0 && numSelected === rowCount}
                        // onChange={onSelectAllClick}
                        // inputProps={{ "aria-label": "select all desserts" }}
                        />
                      </TableCell>
                      <TableCell>Name of the Store</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>State</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {stores.map((store, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell></TableCell>
                          <TableCell>{store.name}</TableCell>
                          <TableCell>{store.address.addressLine1}</TableCell>
                          <TableCell>{store.address.city}</TableCell>
                          <TableCell>{store.address.state}</TableCell>
                          <TableCell>
                            <div>
                              <Tooltip title="Edit">
                                <EditIcon />
                              </Tooltip>

                              <Tooltip title="Delete">
                                <DeleteIcon />
                              </Tooltip>
                            </div>

                            <div></div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default viewStore;
