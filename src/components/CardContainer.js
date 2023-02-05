import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Cards from "./Cards";


const CardContainer = ({ filteredRolo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <p>Loading.....</p>;
  }

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
                <Cards monster={monster} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default CardContainer;
