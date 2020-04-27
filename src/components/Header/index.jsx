import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../../assets/images/yousef.jpg";

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color: 'tomato'
    },
    subTitle:{
        color: "tan",
        marginBottom: "3rem"
    },
    mainContainer: {
        position: "absolute",
        top: "50%",
        left: "50",
        transofrm: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

export default function Header() {
    const classes = useStyles()

  return (
    <Box className={classes.mainContainer}>
        <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Yousef Rizik" />
        </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Yousef Rizik"]} typeSpeed={40} />
      </Typography>
      <br/>
      <Typography className={classes.subTitle} variant="h5">
        <Typed strings={["Full Stack Developer", "MERN Stack"]} typeSpeed={40} backSpeed={60} loop />
      </Typography>
    </Box>
  );
}
