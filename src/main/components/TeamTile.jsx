import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid4 } from "uuid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BK } from '../../common/constants';


const userStyles = makeStyles((theme) => ({
  linkRoute: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  paper: {
    padding: '1rem',
    minHeight: 160
  },
  teamName: {
    marginBottom: theme.spacing(3)
  }
}));


const TeamTile = ({team}) => {

  const classes = userStyles();

  return (
    <Link key={uuid4()} to={`${BK.ENDPOINTS.TEAMS}/${team.name}`}
          className={classes.linkRoute}>
      <Paper className={classes.paper} >
        <Typography key={uuid4()} variant="h5" align="left" className={classes.teamName}>{team.name}</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography key={uuid4()} variant="subtitle2" align="left">Total Matches</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography key={uuid4()} variant="body2" align="right">{team.totalMatches}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography key={uuid4()} variant="subtitle2" align="left">Total Wins</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography key={uuid4()} variant="body2" align="right">{team.totalWins}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default TeamTile;