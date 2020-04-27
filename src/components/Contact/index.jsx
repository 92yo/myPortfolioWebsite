import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "../NavBar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
      marginTop: "1rem",
      color: "tomato",
      borderColor: "tomato"
  }
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" style={{color:"tomato", textAlign: "center", textTransform:"uppercase"}}>Contact Me</Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <Button variant="outlined" className={classes.button} fullWidth={true} endIcon={<SendIcon />}>
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
