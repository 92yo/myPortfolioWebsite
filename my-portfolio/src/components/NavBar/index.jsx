import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {Link} from "react-router-dom";
import Footer from "../Footer";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import avatar from "../../assets/images/yousef.jpg";

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact"
  },
];

export default function NavBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sliderList = (slider) => (
    <Box
      className={classes.sliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Yousef Rizik" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sliderList("right")}
              <Footer/>
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}