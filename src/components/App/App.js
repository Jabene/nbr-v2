import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import LogIn from '../LogIn/LogIn'
import DrawerLeft from '../Drawer/DrawerLeft'
import DrawerRight from '../Drawer/DrawerRight'
import Container from '@mui/material/Container'



function App() {
  const [user, setUser] = React.useState('')
  const [drawerLeft, toggleDrawerLeft] = React.useState(false)
  const [drawerRight, toggleDrawerRight] = React.useState(false)
  const existingUser = JSON.parse(localStorage.getItem('user'))

  if(!user && existingUser) {
    setUser(existingUser)
  }

  return (
      <Container maxWidth='xxl' sx={{p: '0px !important', backgroundColor: '#F2A4C7', minHeight: {xs: '100vh'}}}>
        <div className="App">
          <Header user={user} toggleDrawerLeft={toggleDrawerLeft} toggleDrawerRight={toggleDrawerRight}/>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}/>
            <Route
              path='/log-in'
              element={ user ?
                <Navigate to='/' /> :
                <LogIn updateUser={setUser}/>}/>
          </Routes>
        </div>
        <DrawerLeft drawerLeft={drawerLeft} toggleDrawerLeft={toggleDrawerLeft} />
        <DrawerRight drawerRight={drawerRight} toggleDrawerRight={toggleDrawerRight} />
      </Container>
  );
}

export default App;
