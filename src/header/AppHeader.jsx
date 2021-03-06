import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescentRounded";

const userStyles = makeStyles((theme) => ({
  themeToggleButton: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    // color: theme.palette.primary.main,
  },
  linkRoute: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const AppHeader = (props) => {
  const classes = userStyles();

  const toggleTheme = (e) => {
    props.toggleDarkMode(!props.darkMode);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Link to="/" className={classes.linkRoute}>
            <Typography variant="h5">IPL Dashboard</Typography>
          </Link>
          <IconButton
            edge="end"
            onClick={toggleTheme}
            className={classes.themeToggleButton}
            color="primary"
          >
            <WbIncandescentIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AppHeader;
