import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#222",
    width: '100%',
  },
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 240,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer >
    <BottomNavigation className={classes.mainContainer} >
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
       <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0, }}
        icon={<Link href="mailto:yousefrizik92@gmail.com"><MailIcon style={{fontSize:"40"}} /></Link>}
      />
    </BottomNavigation>
    </footer>
  );
}
