import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PieChart } from 'react-minimal-pie-chart';
import Typography from "@material-ui/core/Typography";

const userStyles = makeStyles((theme) => ({
   pie: {
    height: 120,
    marginTop: theme.spacing(1),
  },
  winLoss: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    }
  },
}));


const WinLoss = (props) => {

  const classes = userStyles();
  const team = props.team;
  const wins = team.totalWins;
  const losses = team.totalMatches - wins;
  const data = [
    { title: 'Losses', value: losses, color: '#ff6384' },
    { title: 'Wins', value: wins, color: '#4bc0c0' }
  ];

  return (
    <React.Fragment>
      <Typography align="center" className={classes.winLoss}>{props.title}</Typography>
      <PieChart className={classes.pie}
      label={({ dataEntry }) => dataEntry.value}
        labelStyle={(index) => ({
          fill: data[index].color === '#ff6384' ? '#ffffff' : '#073042',
          fontSize: '1.6ch',
          fontFamily: 'sans-serif',
        })}
        data={data}
      />
    </React.Fragment>
  );
};

export default WinLoss ;