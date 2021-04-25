import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

const userStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
    },
}));


const MatchDetailsCard = ({match}) => {

    const classes = userStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Team Name</Typography>
                <Typography variant="body1">{match.team1} vs {match.team2}</Typography>
            </CardContent>
        </Card>
    );
};

export default MatchDetailsCard;