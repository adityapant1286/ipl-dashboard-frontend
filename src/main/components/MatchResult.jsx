import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const userStyles = makeStyles((theme) => ({
	result: {
    borderRadius: 8,
    fontSize: 16,
    padding: "0 10px",
    marginBottom: theme.spacing(2),
	},
  won: {
    // backgroundColor: teal["A400"],
    backgroundColor: '#4bc0c0',
    color: "#073042",
  },
  lost: {
    // backgroundColor: deepOrange["A400"],
    backgroundColor: '#ff6384',
    color: "#ffffff",
  },
  tie: {
    // backgroundColor: lime[500],
    backgroundColor: '#ffcd56',
    color: "#073042",
  },
}));

const wonTypes = ["runs", "wickets"];

const MatchResult = ({ isWon, wonByResult }) => {
  const classes = userStyles();

  return wonByResult === "tie" 
				? (<Chip className={`${classes.result} ${classes.tie}`} 
								label="Tie" />) 
				: isWon && wonTypes.includes(wonByResult) 
					? (<Chip className={`${classes.result} ${classes.won}`} 
								label="Won" />) 
					: (<Chip className={`${classes.result} ${classes.lost}`} 
								label="Lost" />);
};

export default MatchResult;
