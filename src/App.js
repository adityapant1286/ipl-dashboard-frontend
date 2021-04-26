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

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

function App() {
  
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={!darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <header>
          <AppHeader toggleDarkMode={setDarkMode} darkMode={darkMode} />
        </header>

        <main>
          <Container fixed>
            <Router>
              <Switch>
                <Route exact path={`${BK.ENDPOINTS.TEAMS}/:teamName${BK.ENDPOINTS.MATCHES}`} >
                  <Match />
                </Route>
                <Route exact path={`${BK.ENDPOINTS.TEAMS}/:teamName`}>
                  <Team />
                </Route>
              </Switch>
            </Router>
          </Container>
        </main>
    </ThemeProvider>
  );
}

export default App;