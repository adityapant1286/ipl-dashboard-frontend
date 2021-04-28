import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { BK } from "../common/constants";
import MatchDetailsCard from "./components/MatchDetailsCard";
import NotFound from "./components/NotFound";
import YearSelector from "./components/YearSelector";

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
    <React.Fragment key={uuid4()}>
      <Grid key={uuid4()} item xs={12}>
        <Typography variant="h4" align="left">{teamName} matches in {year}</Typography>
      </Grid>
      { matchData && matchData.length > 0
        ? matchData.map(match => (
          <Grid key={uuid4()} item xs={12}>
            <MatchDetailsCard teamName={teamName} match={match} />
          </Grid>
        ))
        : <NotFound />
      }
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid key={uuid4()} container spacing={2} item xs={12} sm={2}>
          <YearSelector teamName={teamName} />
        </Grid>
        <Grid key={uuid4()} container spacing={2} item xs={12} sm={10}>
          {displayMatchSynopses()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Match;
