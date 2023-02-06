import React, { useEffect, useState } from "react";
import { Grid, Stack, CircularProgress } from "@mui/material";
import Cards from "./Cards";

const CardContainer = ({ filteredRolo, setFilteredRolo }) => {


  const deleteCard = (id) => {
    console.log(id);
    const updatedAry = filteredRolo.filter((elem, ind) => {
      return ind !== id;
    });

    setFilteredRolo(updatedAry);
    console.log(updatedAry);
  };

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredRolo.map((monster, id) => {
          return (
            <Grid item xs={12} sm={4} key={id}>
              <Cards monster={monster} deleteCard={deleteCard} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CardContainer;
