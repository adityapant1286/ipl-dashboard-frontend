import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import MatchDetailsCard from "./components/MatchDetailsCard";
import MatchSmallCard from "./components/MatchSmallCard";
import Grid from "@material-ui/core/Grid";

import { BK } from "../common/constants";
import NotFound from "./components/NotFound";

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Team = (props) => {
  const classes = userStyles();
  const [teamData, setTeamData] = useState({});

  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const resp = await fetch(
        `${BK.HOST}${BK.ENDPOINTS.TEAMS}/${teamName}`
      );
      const data = await resp.json();
      setTeamData(data);
    };

    fetchMatches();
  }, 
  [teamName] // important: this lets navigate routes when this field change
  );

  const displayMatchSynopses = () => (
    teamData.matchSynopses 
      ? (
        <React.Fragment>
          <Grid key={uuid4()} item xs={12}>
            <MatchDetailsCard teamName={teamData.name} match={teamData.matchSynopses[0]} />
          </Grid>
          {
              teamData.matchSynopses
                  .slice(1)
                  .map((match) => (
                      <Grid key={uuid4()} item xs={12} sm={6} md={4}>
                          <MatchSmallCard teamName={teamData.name} match={match} />
                      </Grid>
                      )
                  )
          }
        </React.Fragment>
      )
      : <NotFound />
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid key={uuid4()} item xs={12}>
          <Typography variant="h3">{teamData.name}</Typography>
        </Grid>
        {displayMatchSynopses()}
      </Grid>
    </div>
  );
};

export default Team;
