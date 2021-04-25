import React, { useState } from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { light, dark } from "./styles/theme";
import AppHeader from "./header/AppHeader";
import Team from "./main/Team";

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
}));


function App() {
  
  const classes = userStyles();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={!darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <header>
          <AppHeader toggleDarkMode={setDarkMode} darkMode={darkMode} />
        </header>

        <main className={classes.main}>
          <Team />
        </main>
    </ThemeProvider>
  );
}

export default App;