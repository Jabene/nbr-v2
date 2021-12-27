import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Services from './Services'
import Gallery from './Gallery'

import flowerNails from '../../assets/flower-nails.png'
import './HomePage.css'


const HomePage = () => {
  return (
    <Container className='home-page' maxWidth='xxl' sx={{display: 'flex'}}>
      <Typography variant='h2' my={2}>Nails By Rylee</Typography>
      <Paper elevation={3} sx={{width: {xs: '500px', sm:'650px', md: '925px'}, maxWidth: {xs: '100vw'}, height: {xs:'300px', sm:'400px', md:'600px'}, minHeight: {xs:'200px'}, maxHeight: {xs:'700px'}}} className='home-img'></Paper>
      <Services />
    </Container>
  )
}

export default HomePage
