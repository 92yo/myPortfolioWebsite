import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import NavBar from "../../components/NavBar";
import CopyRight from "../../components/CopyRight";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 30,
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      }
    }
},
timeLineItem:{
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
        content: "''",
        position: "absolute",
        right: "-0.625rem",
        top: "calc(50% - 5px)",
        borderStyle: "solid",
        borderColor: "tomato tomato transparent transparent",
        borderWidth: "0.625rem",
        transofrm: "rotate(45deg)",
      },
      [theme.breakpoints.up("md")]: {
        width: "38%",
      marginLeft: "11%",
        "&:nth-of-type(2n)": {
          float: "right",
          margin: "1rem",
          borderColor: "tan",
        },
        "&:nth-of-type(2n):before": {
          right: "auto",
          left: "-0.625rem",
          borderColor: "transparent transparent tomato tomato",
        },
      },
},
timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlgin: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        dispaly: "none",
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransofrm: "uppercase",
  },
  subHeading: {
      color: "white",
      padding: "0",
      textTransofrm: "uppercase"
  }
}));

export default function Experience() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              Narjes Media(3/2020 - 4/2020)
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "wheat"}}>
            Worked as a Full Stack Developer for Narjes-Media through Kav-Mashve building their Wajjbat-Social platform.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019/2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" align="center" style={{color: "tomato"}}>
              Kav Mashvi - Coding Bootcamp(11/2019 - 4/2020)
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "wheat"}}>
            Final Project - a website which makes it easier for our clients to donate clothes/resources without the hassle of worrying about finding time to give it to the orgs.
            </Typography>
          </Box>
        </Box>
      </Box>
      <CopyRight/>
    </>
  );
}
