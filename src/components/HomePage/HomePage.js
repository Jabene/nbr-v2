import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import flowerNails from '../../assets/flower-nails.png'
import './HomePage.css'


const HomePage = () => {
  return (
    <Grid container
      className='home-page'

      columns={{xs: 4, md: 12}}>
      <Grid item
        md={3}
        my={4}
        sx={{
          display: {xs: 'none', md: 'flex'}}}>
        <Paper
          className='home-img'
          sx={{
            minHeight: {md: '600px'},
            minWidth: '400px'}}
          elevation={10}></Paper>
      </Grid>
      <Grid item
        xs={4}
        md={8}
        my={4}>
        <Grid container
          sx={{
            minHeight: {l: '600px', md: '600px', xs: '400px'},
            borderRadius: '6px',
            justifyContent: 'center'}}>
          <Grid item xs={3} md={5} m={2} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, maxWidth: '100%', minHeight: {xs: '400px'}}}>
            <Card sx={{backgroundColor: '#E06C9F'}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='auto'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>Make An Appointment</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={5} m={2} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, maxWidth: '100%', minHeight: {xs: '400px'}}}>
            <Card sx={{backgroundColor: '#E06C9F'}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='auto'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>View Gallery</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={5} m={2} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, maxWidth: '100%', minHeight: {xs: '400px'}}}>
            <Card sx={{backgroundColor: '#E06C9F'}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='auto'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>Write a review</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={5} m={2} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, maxWidth: '100%', minHeight: {xs: '400px'}}}>
            <Card sx={{backgroundColor: '#E06C9F'}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='auto'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>View Pricing</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
