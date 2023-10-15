import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const pages = ['Home', 'About', 'Catalog', 'Contact Us', 'Join the Team'];
const settings = ['Profile', 'Account', 'Logout'];



const NavBar=()=>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (


    // cambiar bg del navbar:




    <AppBar position="static" sx={{backgroundColor:'rgb(105, 45, 33)', color:'rgb(50,18,12)'}} >
      <Container >
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
           
           {/*
           
           para cambiar styles del navbar : aca abajo
           
           */}



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            

            
          <Link to="/" style={{ textDecoration: 'none' }} >
               <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                Home
              </Button>

            </Link>


            <Link to="/ContactUs" style={{ textDecoration: 'none' }} >
               <Button
              key="Contact Us"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                Contact Us
              </Button>

            </Link>
            
            
            <Link to="/About" style={{ textDecoration: 'none' }} >
               <Button
              key="About"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                About
              </Button>

            </Link>


            <Link to="/products/shirts" style={{ textDecoration: 'none' }} >
               <Button
              key="Shirts"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                Shirts
              </Button>

            </Link>

            
            <Link to="/products/pants" style={{ textDecoration: 'none' }} >
               <Button
              key="Pants"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                Pants
              </Button>

            </Link>

            
            <Link to="/products/dresses" style={{ textDecoration: 'none' }} >
               <Button
              key="Dresses"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                Dresses
              </Button>

            </Link>

            
            <Link to="/products/jackets" style={{ textDecoration: 'none' }} >
               <Button
              key="Jackets"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'rgb(50,18,12)', display: 'block' }}
              >
                Jackets
              </Button>

            </Link>

          </Box>
          <div>
            <CartWidget/>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;