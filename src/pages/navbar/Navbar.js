import React from 'react'
import './navbar.css'
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import logo from '../../images/ezrotechcrop.png'
import './index.js'


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
    fontSize: "16px",
    marginLeft: "4px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
<section class="navigation">
        <div class="nav-container">
          <div class="brand">
          <Link to="/" className="pt-10 px-4 ">
            <img alt='logo' src={logo}
              className="logo pt-10" style={{width: "180px",height:"50px"}} /></Link>
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="navbar-toggle" href="#!"><span></span></a></div>
            <ul class="nav-list">
              <li>
              <Link  to="/" className={classes.link}>
              Home
            </Link>
              </li>
              <li>
              <Link to="/about" className={classes.link}>
              AboutUs
            </Link>
           
              </li>
              <li>
              <Link to="/services" className={classes.link}>
              Services
            </Link>
                {/* <ul class="navbar-dropdown">
                  <li>
                    <a href="#!">Sass</a>
                  </li>
                  <li>
                    <a href="#!">Less</a>
                  </li>
                  <li>
                    <a href="#!">Stylus</a>
                  </li>
                </ul> */}
              </li>
              {/* <li>
              <Link to="/techteam" className={classes.link}>
              OurTeam
            </Link>
              </li> */}
              {/* <li>
                <a href="#!">Category</a>
                <ul class="navbar-dropdown">
                  <li>
                    <a href="#!">Sass</a>
                  </li>
                  <li>
                    <a href="#!">Less</a>
                  </li>
                  <li>
                    <a href="#!">Stylus</a>
                  </li>
                </ul>
              </li> */}
              <li>
              <Link to="/contactus" className={classes.link}>
              ContactUs
            </Link>
              </li>
           
            </ul>
          </nav>
        </div>
      </section>
  )
}

export default Navbar;