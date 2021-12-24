import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import Container from '@mui/material/Container'


function App() {
  return (
    <Container maxWidth='xxl' sx={{p: '0px !important', backgroundColor: '#F79AD3', minWidth: '100vw', minHeight: '100vh' }}>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
