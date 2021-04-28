import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from "uuid";
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { BK } from '../common/constants';
import TeamTile from './components/TeamTile';


const userStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
}));

const useQuery = () => new URLSearchParams(useLocation().search);

const Home = (props) => {

  const classes = userStyles();
  const [teams, setTeams] = useState([]);

  const queryParams = useQuery();
  const size = queryParams.get('size') || 0;
  const page = queryParams.get('page') || 0;
  const sortField = queryParams.get('sortField') || 'id';
  const order = queryParams.get('order') || 'asc';

  useEffect(
    () => {
      const fetchTeams = async () => {
        const q = `?page=${page}&size=${size}&sortField=${sortField}&order=${order}`;

        const resp = await fetch(`${BK.HOST}${BK.ENDPOINTS.TEAMS}${q}`);
        const data = await resp.json();
        setTeams(data || []);
    };
    fetchTeams();
    }, 
    [size, page, sortField, order]
  );

  return (
    <Grid container spacing={3} 
          className={classes.root}>
      {
        teams && teams.map(team => (
          <Grid key={uuid4()} item xs={12} sm={6} md={4}>
            <TeamTile key={uuid4()} team={team} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Home;