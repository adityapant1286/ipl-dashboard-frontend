import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid4 } from "uuid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { BK } from '../../common/constants';
import Paper from '@material-ui/core/Paper';


const userStyles = makeStyles((theme) => ({
  linkRoute: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  paper: {
    height: 'fit-content',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: 56,
    },  
  },
  textCenter: {
    textAlign: 'center',
  },
}));

const startYear = process.env.REACT_APP_DATA_START_YEAR;
const endYear = process.env.REACT_APP_DATA_END_YEAR;

const years = () => {
  const yrs = [];
  for (let i = endYear; i > startYear; i--) {
    yrs.push(i);
  }
  return yrs;
};

const YearSelector = ({teamName}) => {

  const classes = userStyles();

  const YearsList = () => (
    <List component="nav" aria-label="Year list"
    subheader={
      <ListSubheader key={uuid4()} component="div" className={classes.textCenter}>
        Select Year
      </ListSubheader>
    }>
      {
        years().map(year => (
          <Link key={uuid4()} className={classes.linkRoute}
              to={`${BK.ENDPOINTS.TEAMS}/${teamName}${BK.ENDPOINTS.MATCHES}?year=${year}`}>
            <ListItem key={uuid4()} className={classes.textCenter} button>
              <ListItemText key={uuid4()} primary={year} />
            </ListItem>
          </Link>
      ))
      }
    </List>
  );

  return (
    <Paper className={classes.paper}>
      <YearsList />
    </Paper>
  );
};

export default YearSelector;