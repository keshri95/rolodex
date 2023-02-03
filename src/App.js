import { AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const API = `https://jsonplaceholder.typicode.com/users`;

  const Rolodex = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMonsters(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    Rolodex(API);
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>Rolodex</Typography>
        </Toolbar>
      </AppBar>
      <Home monsters={monsters} />
    </div>
  );
};

export default App;
