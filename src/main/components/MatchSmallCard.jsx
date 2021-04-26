import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import { BK } from '../../common/constants';


const userStyles = makeStyles((theme) => ({
    root: {
    },
    linkRoute: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
    },
}));


const MatchSmallCard = ({teamName, match}) => {

    const classes = userStyles();
    const otherTeam = (teamName === match.team1) ? match.team2 : match.team1;
    const otherTeamRoute = `${BK.ENDPOINTS.TEAMS}/${otherTeam}`;

    const cardTitle = () => (
        <React.Fragment>
            <Link to={otherTeamRoute} className={classes.linkRoute}>
                <Typography variant="h5">vs {otherTeam}</Typography>
            </Link>
        </React.Fragment>
    );

    const cardContent = () => (
        <Typography variant="h6">
            {match.winner} won by {match.resultMargin} {match.result}
        </Typography>
    );

    return (
        <Card className={classes.root}>
            <CardHeader title={cardTitle()} />
            <CardContent>
                {cardContent()}
            </CardContent>
        </Card>
    );
};

export default MatchSmallCard;