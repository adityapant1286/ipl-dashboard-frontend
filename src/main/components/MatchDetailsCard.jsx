import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { BK } from "../../common/constants";
import MatchResult from "./MatchResult";

const userStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },
  linkRoute: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  responsiveRightText: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
}));

const MatchDetailsCard = ({ teamName, match, latest }) => {
  const classes = userStyles();
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamRoute = `${BK.ENDPOINTS.TEAMS}/${otherTeam}`;
  const isMatchWon = teamName === match.winner;

  const leftContents = () => (
    <React.Fragment>
      <MatchResult isWon={isMatchWon} wonByResult={match.result} />
      {
        latest && (<Typography variant="body2" 
                        color="textSecondary" 
                        align="left" gutterBottom>
                          Latest Match
                    </Typography>)
      }
      <Typography variant="body2" align="left" color="textSecondary">vs</Typography>
      <Link to={otherTeamRoute} className={classes.linkRoute}>
        <Typography variant="h5" align="left" gutterBottom>{otherTeam}</Typography>
      </Link>
      <Typography variant="body2" color="textSecondary" align="left">{match.date}</Typography>
      <Typography variant="body2" color="textSecondary" align="left">at {match.venue}</Typography>
      <Typography variant="h6" align="left" className={classes.mt3}>
        {match.winner} won by {match.resultMargin} {match.result}
      </Typography>
    </React.Fragment>
  );

  const rightContents = () => (
    <React.Fragment>
      <Typography variant="subtitle2" color="textSecondary" className={classes.responsiveRightText}>
        First Innings
      </Typography>
      <Typography variant="body1" className={`${classes.responsiveRightText} ${classes.mb2}`}>
        {match.team1}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" className={classes.responsiveRightText}>
        Second Innings
      </Typography>
      <Typography variant="body1" className={`${classes.responsiveRightText} ${classes.mb2}`}>
        {match.team2}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" className={classes.responsiveRightText}>
        Man of the Match
      </Typography>
      <Typography variant="body1" className={`${classes.responsiveRightText} ${classes.mb2}`}>
        {match.playerOfMatch}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" className={classes.responsiveRightText}>
        Umpires
      </Typography>
      <Typography variant="body1" className={classes.responsiveRightText}>
        {match.umpire1}, {match.umpire2}
      </Typography>
    </React.Fragment>
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {leftContents()}
          </Grid>
          <Grid item xs={12} sm={6}>
            {rightContents()}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MatchDetailsCard;
