import './App.css';
import Header from '../Header/Header'
import Container from '@mui/material/Container'



function App() {
  return (
    <Container maxWidth='xxl' sx={{p: '0px !important'}}>
      <div className="App">
        <Header />
      </div>
    </Container>
  );
}

export default App;
