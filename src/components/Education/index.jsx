import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import CopyRight from "../../components/CopyRight";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 40,
    marginLeft: "0 auto"
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
        width: "44%",
        margin: "1rem",
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

export default function Education() {
  const classes = useStyles();

  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education
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
              Founders And Coders - Kav Mashvi Coding Boot-Camp, Haifa, Israel
            </Typography>
            <Typography variant="subtitle1" align="center" style={{color: "wheat"}}>
            Trained as a Full Stack Developer through Founders and Coders - Kav Mashvi. 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015 - 2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              Industrial Engineering & Management
            </Typography>
            <Typography variant="body1" align="center" style={{color: "wheat"}}>
              Technion - Handaseim, Haifa, Israel
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013 - 2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
              BSc Biology 
            </Typography>
            <Typography variant="body1" align="center" style={{color: "wheat"}}>
              University of California, Santa Cruz, California 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2011 - 2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
            BSc Biology 
            </Typography>
            <Typography variant="body1" align="center" style={{color: "wheat"}}>
              Miramar College, San Diego, California
            </Typography>
          </Box>
        </Box>
      </Box>
      <CopyRight/>
    </>
  );
}
