import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/yousef.jpg";
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
  TrendingUp,
  Home,
  Apps,
  Equalizer,
  School,
  Star,
  Favorite,
  Person,
  Menu,
  Close,
} from "@material-ui/icons";

const drawerWidth = 241;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  sliderContainer: {
    width: 240,
    background: "#ff6347",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  drawer: {
    [theme.breakpoints.down("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "#222",
    opacity: 0.8,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - 0px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "1",
    },
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    opacity: 0.9,
    width: drawerWidth,
    marginLeft: 0,
  },
  listItem: {
    color: 'wheat',
    [theme.breakpoints.down("md")]: {
      marginBottom: '0px',
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: '-10px',
    },
  }
}));

const menuItems = [
  {
    listIcon: <Home style={{ color: "#222", fontSize: "28px" }} />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Person style={{ color: "green", fontSize: "28px" }} />,
    listText: "About",
    listPath: "/about",
  },
  {
    listIcon: <School style={{ color: "orange", fontSize: "28px"}} />,
    listText: "Education",
    listPath: "/education",
  },
  {
    listIcon: <Apps style={{ color: "blue", fontSize: "28px" }} />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <Equalizer style={{ color: "purple", fontSize: "28px" }} />,
    listText: "Skills",
    listPath: "/skills",
  },
  {
    listIcon: <Star style={{ color: "#511", fontSize: "28px" }} />,
    listText: "Awards",
    listPath: "/awards",
  },
  {
    listIcon: <Favorite style={{ color: "red", fontSize: "28px" }} />,
    listText: "Volunteering",
    listPath: "/volunteering",
  },
  {
    listIcon: <TrendingUp style={{ color: "#3987c9", fontSize: "28px" }} />,
    listText: "Experience",
    listPath: "/experience",
  },
];

export default function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box
      className={`${classes.sliderContainer} ${classes.toolbar}`}
      component="div"
    >
      <Hidden mdUp>
        <IconButton
          onClick={handleDrawerToggle}
          className={classes.closeMenuButton}
        >
          <Close />
        </IconButton>
      </Hidden>
      <Avatar className={classes.avatar} src={avatar} alt="Yousef Rizik" />
      <Typography align="center" variant="h5" style={{ color: "tan" }}>
        Yousef Rizik
      </Typography>
      <Typography align="center" variant="h6" style={{ color: "white" }}>
        Full Stack Developer
      </Typography>
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
    <div className={classes.root}>
      <CssBaseline />
      <Hidden mdUp /*960px and up*/ implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              aria-label="open navigation"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              style={{ color: "tan" }}
            >
              <Menu />
            </IconButton>
            <Typography align="center" variant="h6" noWrap>
              Yousef Rizik - Full Stack Developer
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label="Navigation Icons">
        <Hidden mdDown /*960px and down*/ implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
            <Footer />
          </Drawer>
        </Hidden>
        <Hidden smDown /*600px and down*/ className={classes.drawer} implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
            <Footer />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
