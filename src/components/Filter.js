import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Filter = () => (
    <Box sx={{ width: 100 }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Filter</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="ASC" />
          <FormControlLabel value="male" control={<Radio />} label="DES" />
        </RadioGroup>
        <Button variant="contained">CLR</Button>
      </FormControl>
    </Box>
);

export default Filter;
