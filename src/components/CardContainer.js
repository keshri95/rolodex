import React, { useEffect, useState } from "react";
import { Grid, Stack, CircularProgress } from "@mui/material";
import Cards from "./Cards";

const CardContainer = ({ filteredRolo, setFilteredRolo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  const deleteCard = (id) => {
    console.log(id);
    const updatedAry = filteredRolo.filter((_, ind) => {
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
         
            <Grid
              key={id}
              span={{ xs: 12, sm: 4, md: 4 }} 
            >
              <Cards monster={monster} deleteCard={deleteCard} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CardContainer;
