import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link
} from "@material-ui/core";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.png";
import project6 from "../../assets/images/project6.png";
import project7 from "../../assets/images/project7.png";
import project8 from "../../assets/images/project8.png";
import project9 from "../../assets/images/project9.png";
import project10 from "../../assets/images/project10.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    marginTop: 80,
  },
  cardContainer: {
    maxWidth: 545,
    margin: "1rem auto",
    background: "whitesmoke"
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Typography style={{color: 'tomato'}} align='center' variant="h4">
          Projects
        </Typography>
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project9}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Wajjbat Social
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    Building a social platform for sharing home made meals.
                    Project done for a client through Kav Mashvi, Narjes Media.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://github.com/92yo/wajjbat-social">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project8}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Donator
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    We Focused on a problem that we see in our communities
                    today, where people have no time to deliver or find an
                    organization to donate various household things to, such as
                    clothes/resources etc. This website will make it easier for
                    them to donate clothes without the hassle of worrying about
                    finding time to give it to the orgs.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/Donator">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project7}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    QuickPick
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    A simple game in which you need to Quickly Pick the colors
                    corresponding to the appropriate button, You win by
                    eliminating the Boss (you) which has 1000HP. Make sure you
                    finish before the timer runs out, and try not to make more
                    than 3 mistakes or its Game Over!
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/quickpick">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project6}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Doodling
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    The idea is painting and chatting with users similar to
                    Skribble.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/Doodling">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Hit The Bear
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    A work in progress game, hit the bear to earn coins and buy
                    power ups to defeat him. Disclaimer: (no animals were Hurt
                    in this project)
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/HowToPrevent">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 6 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Book Your Next Hostel
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    The idea is searching and booking hostels .
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/TheHooligans">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* {Project 7} */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project10}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    To Do App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    A simple To Do App.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/Team-LYN---To-Do-project">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 8 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Choose Your Next Vacation
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    This app will help you decide top 10 destinations to head to
                    by typing your country of origin, and the currency you would
                    like to pay with.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/TheStolens">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 9 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Animal Lookup
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    This is a simple autocomplete app that helps you find an
                    animal you're looking for and sends you for more in depth
                    information about that animal.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/boomshakala">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 10 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography style={{color: 'tan'}} gutterBottom variant="h5">
                    Music 4 You
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{color: '#511'}}
                  >
                    An Interactive Website that gives Info about a certain
                    artist that is searched for. You search for an artist of
                    your choice, and we show the name of the artist and a
                    picture of the artist along with his top 5 tracks. Possible
                    using Deezer API.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link href="https://github.com/92yo/RuntimeTerror/tree/master/Music4You">
                  <Button style={{color: 'red'}} size="small" color="primary">
                    See Project Here
                  </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
