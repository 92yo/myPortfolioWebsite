import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  particle: {
    position: "absolute",
    opacity: "0.3"
  }
})

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <NavBar/>
      <Header/>
      <Particles
      canvasClassName={classes.particle}
        params={{
          particles: {
            number:{
              value: 45,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: 'tomato'
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true
              }
            },
            opacity:{
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              }
            }
          }
        }}
      />
      </div>  
  );
}
