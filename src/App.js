import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Suspense, useEffect, useState } from "react";
import React, { lazy } from "react";
const Home = React.lazy(() => import("./components/Home"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [theme, setTheme] = useState('light-mode');
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

    const changeTheme = () => {
    
      if(theme === "dark-mode"){
          setTheme("light-mode");
      } else{
          setTheme('dark-mode');
      }
    }

    useEffect(() => {
      document.body.className = theme;
    }, [theme])

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
          <Toolbar>
            <AdbIcon />
            <Typography variant="h5" sx={{ flexGrow: 1,display: { xs: "block", sm: 'block' }}}>Rolodex</Typography>
              <IconButton size="large" onClick={changeTheme}>
                <DarkModeIcon />
              </IconButton>              
          </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      <Suspense fallback={<div>Please wait...</div>}>
          <Home monsters={monsters} />
      </Suspense>
    </div>
  );
};

export default App;
