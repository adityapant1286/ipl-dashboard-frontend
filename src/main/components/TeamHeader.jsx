import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid4 } from "uuid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WinLoss from './WinLoss';

const userStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


const TeamHeader = ({team}) => {

    const classes = userStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container alignItems="center">
                    <Grid key={uuid4()} item xs={12} sm={9}>
                        <Typography variant="h2" align="left">{team.name}</Typography>
                    </Grid>
                    <Grid key={uuid4()} item xs={12} sm={3}>
                        <WinLoss team={team} title="Wins/Losses" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TeamHeader;