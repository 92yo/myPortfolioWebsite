import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    color: "tan",
    textAlign: "center",
    bottom: 0,
    width: "100%",
    position: "fixed"
  },
});
export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Yousef Rizik
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
