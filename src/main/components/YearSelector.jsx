import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid4 } from "uuid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BK } from '../../common/constants';
import ListSubheader from '@material-ui/core/ListSubheader';

const userStyles = makeStyles((theme) => ({
  linkRoute: {
    textDecoration: "none",
    color: theme.palette.primary.main,
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

  return (
    <List component="nav" aria-label="Year list"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Select Year
      </ListSubheader>
    }>
      {
        years().map(year => (
          <ListItem key={uuid4()} button>
            <Link key={uuid4()} className={classes.linkRoute}
            to={`${BK.ENDPOINTS.TEAMS}/${teamName}${BK.ENDPOINTS.MATCHES}?year=${year}`}>
              <ListItemText key={uuid4()} primary={year} />
            </Link>
          </ListItem>
      ))
      }
    </List>
  );
};

export default YearSelector;