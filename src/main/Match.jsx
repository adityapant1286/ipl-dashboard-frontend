import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { BK } from "../common/constants";
import MatchDetailsCard from "./components/MatchDetailsCard";
import NotFound from "./components/NotFound";

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const useQuery = () => new URLSearchParams(useLocation().search);

const Match = (props) => {
  const classes = userStyles();
  const [matchData, setMatchData] = useState([]);

  const { teamName } = useParams();
  const queryParams = useQuery();
  const currentYear = new Date().getFullYear();
  const year = queryParams.get('year') || currentYear;

  useEffect(() => {

    const fetchMatches = async () => {
      const resp = await fetch(
        `${BK.HOST}${BK.ENDPOINTS.TEAMS}/${teamName}${BK.ENDPOINTS.MATCHES}?year=${year}`
      );
      const data = await resp.json();
      setMatchData(data || []);
    };

    fetchMatches();
  }, 
  [teamName, year] // important: this lets navigate routes when this field change
  );

  const displayMatchSynopses = () => (
    matchData
      ? matchData.map(match => (
        <Grid key={uuid4()} item xs={12} sm={6} md={4}>
          <MatchDetailsCard teamName={teamName} match={match} />
        </Grid>
      ))
      : <NotFound />
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid key={uuid4()} item xs={12}>
          <Typography variant="h3">Match data</Typography>
        </Grid>        
        {displayMatchSynopses()}
      </Grid>
    </div>
  );
};

export default Match;
