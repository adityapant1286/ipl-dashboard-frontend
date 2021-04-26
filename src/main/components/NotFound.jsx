import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const userStyles = makeStyles((theme) => ({
  root: {
  },
  content: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
},
}));

const NotFound = (props) => {
  const classes = userStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h2" align="center"
                    color="primary" 
                    gutterBottom>
          404
        </Typography>
        <Typography variant="h5" align="center" color="primary">
          The page you are looing for is not found.
        </Typography>
        <Typography variant="h6" align="center" color="primary">
          Please check the URL.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotFound;
