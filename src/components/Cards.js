import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
const Cards = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={`https://robohash.org/${id}?set=set3&size=180x180`}
        alt={`${id}`}
      />
      <CardContent align="center">
      <Typography variant='h5'>{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
