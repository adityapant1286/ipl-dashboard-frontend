import React, { useState } from "react";
import {BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {BK} from "./common/constants";

import { light, dark } from "./styles/theme";
import AppHeader from "./header/AppHeader";
import Team from "./main/Team";
import Match from "./main/Match";

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
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
          <Router>
            <Switch>
              <Route path={`${BK.ENDPOINTS.TEAMS}/:teamName${BK.ENDPOINTS.MATCHES}/:year`}>
                <Match />
              </Route>
              <Route path={`${BK.ENDPOINTS.TEAMS}/:teamName`}>
                <Team />
              </Route>
            </Switch>
          </Router>
        </main>
    </ThemeProvider>
  );
}

export default App;