import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import {
   Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",

    },
    icon:{
        color: "white"
    },
    list:{
     width:"200px"
  }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
       
      >
        <List  className={classes.list}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/services" className={classes.link}>Services</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/techteam" className={classes.link}>OurTeam</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}  >
        <MenuIcon className={classes.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
