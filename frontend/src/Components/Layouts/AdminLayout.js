import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import paths from "../../router/paths";
import { Nav, Navbar, Button, Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "black",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  admintext: {
    color: "white",
  },
  NavLinks: {
    color: "white",
    transition: 0.5,
    hower: (85, 34, 180),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function AdminLayout({ children, logout }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Navbar.Brand className={classes.title} as={Link} to={paths.home}>
            Leisurester<small className={classes.admintext}>|admin</small>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={paths.profile} className={classes.NavLinks}>
              <p className={classes.NavLinks}> Profile</p>
            </Nav.Link>
            <Nav.Link as={Link} to={paths.adminglossary}>
              <p className={classes.NavLinks}>Library</p>
            </Nav.Link>
            <Nav.Link as={Link} to={paths.newLeisure}>
              <p className={classes.NavLinks}> NewLeisure</p>
            </Nav.Link>
            <Nav.Link as={Link} to={paths.adminproposition}>
              <p className={classes.NavLinks}> Propositions</p>
            </Nav.Link>
          </Nav>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
