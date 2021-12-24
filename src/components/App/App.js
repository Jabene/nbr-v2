import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import LogIn from '../LogIn/LogIn'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ClickAwayListener from '@mui/base/ClickAwayListener'

import IconButton from '@mui/material/IconButton'

import HomeIcon from '@mui/icons-material/Home'
import CollectionsIcon from '@mui/icons-material/Collections'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'


function App() {
  const [user, setUser] = React.useState({})
  const [modal, toggleModal] = React.useState(false)

  const closeModal= e => {
    toggleModal(false)
  }

  return (
      <Container maxWidth='lg' sx={{p: '0px !important', backgroundColor: '#F2A4C7', minHeight: {xs: '100vh'}}}>
        <div className="App">
          <Header user={user} toggleModal={toggleModal}/>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/log-in'
              element={<LogIn updateUser={setUser}/>}
            />
          </Routes>
        </div>
        <Drawer anchor='left' open={modal} onClose={() => toggleModal(false)} sx={{display: 'flex', flexDirection: 'column'}}>
          <List>

            <ListItem disablePadding sx={{width: '300px'}}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{width: '300px'}}>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary='Gallery' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{width: '300px'}}>
              <ListItemButton>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary='Pricing' />
              </ListItemButton>
            </ListItem>

          </List>
          <Container sx={{alignSelf: 'flex-end'}}>
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Container>
        </Drawer>
      </Container>
  );
}

export default App;
