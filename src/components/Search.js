import React from "react";
import { Grid, Paper } from "@mui/material";

const Search = ({ onChangeHandler }) => {
  

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Paper component='form' sx={{ p: 2, boxShadow: 'none', m: 2}}>
        <input type="search" placeholder="Search here" onChange={onChangeHandler} />
      </Paper>
    </Grid>
  );
};

export default Search;
