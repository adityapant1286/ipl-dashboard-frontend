import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { BK } from "../common/constants";

const userStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Match = (props) => {
  const classes = userStyles();
/*   const [teamData, setTeamData] = useState({});

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
 */
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid key={uuid4()} item xs={12}>
          <Typography variant="h3">Match data</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Match;
