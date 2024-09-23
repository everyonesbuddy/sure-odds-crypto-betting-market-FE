import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem
        button
        component="a"
        href="https://buymeacoffee.com/sureodds"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Donate to Handicappers" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/picksOfTheDay"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Live Picks" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/postYourPicks"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Post Your Picks" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4F46E5" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
            Sure Odds
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" style={{ fontSize: "12px" }}>
            <Link
              to="/picksOfTheDay"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Live Picks
            </Link>
          </Button>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" style={{ fontSize: "12px" }}>
            <Link
              to="/postYourPicks"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              post your picks
            </Link>
          </Button>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" style={{ fontSize: "12px" }}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              about
            </Link>
          </Button>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
};

export default Nav;
