import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '0.4rem solid',
    minHeight: '30vh',
  },
  content: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
},
}));

const NotFound = (props) => {
  const classes = userStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h2" align="center" 
                    gutterBottom>
          404
        </Typography>
        <Typography variant="h5" align="center">
          Data not found.
        </Typography>
        <Typography variant="h5" align="center">
          Please check the URL.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotFound;
