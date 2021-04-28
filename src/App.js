import React, { useState } from "react";
import {BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {BK} from "./common/constants";

import { light, dark } from "./styles/theme";
import AppHeader from "./header/AppHeader";
import Team from "./main/Team";
import Match from "./main/Match";
import { Container } from "@material-ui/core";
import Home from "./main/Home";

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

function App() {
  
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={!darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <header>
          <AppHeader toggleDarkMode={setDarkMode} darkMode={darkMode} />
        </header>

        <main style={{marginBottom: '5rem'}}>
          <Container fixed>
              <Switch>
                <Route exact path={`${BK.ENDPOINTS.TEAMS}/:teamName${BK.ENDPOINTS.MATCHES}`} >
                  <Match />
                </Route>
                <Route exact path={`${BK.ENDPOINTS.TEAMS}/:teamName`}>
                  <Team />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
          </Container>
        </main>
        </Router>
    </ThemeProvider>
  );
}

export default App;