import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Link href="https://github.com/92yo"><GitHubIcon style={{fontSize:"35"}} /></Link>}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Link href="https://www.linkedin.com/in/yousefrizik/"><LinkedInIcon style={{fontSize:"40"}} /></Link>}
      />
    </BottomNavigation>
  );
}
