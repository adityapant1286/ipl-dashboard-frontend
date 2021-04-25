import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import MatchDetailsCard from "./MatchDetailsCard";
import MatchSmallCard from "./MatchSmallCard";
import Grid from "@material-ui/core/Grid";

import { BK } from "../common/constants";

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Team = (props) => {
  const classes = userStyles();
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    const fetchMatches = async () => {
      const resp = await fetch(
        BK.HOST + BK.ENDPOINTS.TEAMS + "/Mumbai Indians"
      );
      const data = await resp.json();
      setTeamData(data);
    };

    fetchMatches();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid key={uuid4()} item xs={12}>
          <Typography variant="h3">{teamData.name}</Typography>
        </Grid>
        {teamData.matchSynopses && (
          <React.Fragment>
            <Grid key={uuid4()} item xs={12}>
              <MatchDetailsCard match={teamData.matchSynopses[0]} />
            </Grid>
            {
                teamData.matchSynopses
                    .slice(1)
                    .map((match) => (
                        <Grid key={uuid4()} item xs={12} sm={4}>
                            <MatchSmallCard match={match} />
                        </Grid>
                        )
                    )
            }
          </React.Fragment>
        )}
      </Grid>
    </div>
  );
};

export default Team;
