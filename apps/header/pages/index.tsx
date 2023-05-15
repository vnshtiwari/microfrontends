import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import navbar from "../styles/navbar.module.css";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


export default function NavBar({user}) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { name: "Home", url: "/home" },
          { name: "Products", url: "/products" },
          { name: "About Us", url: "/aboutUs" },
          { name: "Careers", url: "/career" },
          { name: "Join the WaitList", url: "/joinWaitList" },
          { name: "Support Prudentiul", url: "/about" },
          { name: "Search", url: "/about" },
          { name: "Sign Up", url: "/about" },
          { name: "Login", url: "/about" },
        ].map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton component="a" href={item.url}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#ed1b2e" }}>
        <Toolbar className={navbar.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(!state)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            href="../home"
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
          >
            Prudential
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {[{name : 'Purchase', href:'/purchase'}, {name : 'Renew', href:'/renew'} , {name : 'Claim', href:'/claim'} , {name : 'Support', href:'/support'} ].map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.href}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Button color="inherit" href="/login">Login</Button>
          {user && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

