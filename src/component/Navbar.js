import React from "react";
import { makeStyles } from '@mui/styles';
import logo from '../images/ezrotechcrop.png'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: "30px",
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    width: "100px",
    
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "30px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
  
    <AppBar   position="sticky" style={{backgroundColor:"GrayText"}}  >

      <CssBaseline />
      
      <Toolbar>
        
        <Typography variant="h4" className={classes.logo}>
        <Link to="/" className="pt-10 px-4 ">
            <img alt='logo' src={logo}
              className="logo pt-10" style={{width: "180px",height:"50px"}} /></Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link  to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/services" className={classes.link}>
              Services
            </Link>
            <Link to="/techteam" className={classes.link}>
              OurTeam
            </Link>
            <Link to="/contactus" className={classes.link}>
              ContactUs
            </Link>
            <Link to="/about" className={classes.link}>
              AboutUs
            </Link>          
          </div>
        )}
      </Toolbar>
    </AppBar>
    </>
  );
}
export default Navbar;
