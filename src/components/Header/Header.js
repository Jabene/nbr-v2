import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login'
import { useNavigate } from 'react-router-dom'

const pages = ['Home', 'Gallery', 'Pricing'];
const settings = ['Account', 'Appointments', 'Logout'];

const ResponsiveAppBar = ({ user, toggleDrawerLeft, toggleDrawerRight }) => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = () => {
    toggleDrawerRight(true)
  }

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(page.target)
    if (page.target.innerText === 'HOME') {
      navigate('/')
    } else {
      navigate(`/${page.target.innerText}`)
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={{backgroundColor: '#E06C9F'}}>
      <Container maxWidth="xl">
        <Toolbar >
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Nails By Rylee
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => toggleDrawerLeft(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Nails By Rylee
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user.id ? <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={() => toggleDrawerRight(true)} sx={{ p: 0 }}>
                        <Avatar alt={user.first_name} src="/static/images/avatar/3.jpg" />
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
                        <MenuItem key={setting} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box> :
                  <Box sx={{ flexGrow: 0 }}>
                    <Button startIcon={<LoginIcon />} href='/log-in' variant='outlined' sx={{color: 'white', borderColor: '#F9C8DF', width: {xs: '90px'}, fontSize: {xs: '9px'}}}>Log In</Button>
                  </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar;
