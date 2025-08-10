import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
// const Filter = React.lazy(() => import("./Filter"));
const CardContainer = React.lazy(() => import("./CardContainer"));
const Search = React.lazy(() => import("./Search"));
const Home = ({ monsters }) => {

  const [search, setSearch] = useState('');
  const [filteredRolo, setFilteredRolo] = useState(monsters);

  const onChangeHandler = (e)=> {
    const searchRolo = e.target.value.toLocaleLowerCase();
    setSearch(searchRolo);
  }

  useEffect(() => {

    const searchedRolo = monsters.filter((item) =>{
      return item.name.toLocaleLowerCase().includes(search)
    })

    setFilteredRolo(searchedRolo);

  }, [search, monsters]);





  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" } }}
      direction="row"
      spacing={2}
    >


    

      <Box>
          <Search monsters={monsters} onChangeHandler={onChangeHandler} />
          <CardContainer monsters={monsters} filteredRolo={filteredRolo} setFilteredRolo={setFilteredRolo}  />
      </Box>
    </Stack>
  );
};

export default Home;
