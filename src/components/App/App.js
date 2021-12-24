import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import LogIn from '../LogIn/LogIn'
import Container from '@mui/material/Container'


function App() {
  const [user, setUser] = React.useState({})

  return (
    <Container maxWidth='xxl' sx={{p: '0px !important', backgroundColor: '#F2A4C7', minWidth: '100vw', minHeight: '100vh'}}>
      <div className="App">
        <Header user={user}/>
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
    </Container>
  );
}

export default App;
