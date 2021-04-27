import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

import { BK } from '../../common/constants';
import MatchResult from './MatchResult';


const userStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    linkRoute: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
}));


const MatchSmallCard = ({teamName, match}) => {

    const classes = userStyles();
    const otherTeam = (teamName === match.team1) ? match.team2 : match.team1;
    const otherTeamRoute = `${BK.ENDPOINTS.TEAMS}/${otherTeam}`;
    const isMatchWon = (teamName === match.winner);

    const cardTitle = () => (
        <React.Fragment>
            <MatchResult isWon={isMatchWon} wonByResult={match.result} />
            <Typography color="textSecondary">vs</Typography>
            <Link to={otherTeamRoute} className={classes.linkRoute}>
                <Typography variant="h5">{otherTeam}</Typography>
            </Link>
        </React.Fragment>
    );

    const cardContent = () => (
        <Typography variant="subtitle2">
            {match.winner} won by {match.resultMargin} {match.result}
        </Typography>
    );

    return (
        <Card className={classes.root}>            
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item>{cardTitle()}</Grid>
                    <Grid item>{cardContent()}</Grid>
                </Grid>
            </CardContent>
        </Card>
    ); 
};

export default MatchSmallCard;