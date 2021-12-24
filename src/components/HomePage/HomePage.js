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
          sx={{
            borderRadius: '6px',
            overflow: 'scroll',
            justifyContent: 'center'}}
          columns={{xs: 5, md: 12}}>
          <Grid item xs={3} md={5} m={3} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, minHeight: {xs: '400px'}, maxHeight: '40vh', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{backgroundColor: '#E06C9F', maxWidth: {xs: '100%'}, maxHeight: {xs: '100%'}}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='60%'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>Make An Appointment</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={5} m={3} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, minHeight: {xs: '400px'}, maxHeight: '40vh', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{backgroundColor: '#E06C9F', maxWidth: {xs: '100%'}, maxHeight: {xs: '100%'}}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='60%'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>View Gallery</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={5} m={3} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, minHeight: '400px', maxHeight: '40vh', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{backgroundColor: '#E06C9F', maxWidth: {xs: '100%'}, maxHeight: {xs: '100%'}}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='60%'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>Write a review</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={5} m={3} sx={{minWidth: {xs: '300px', md: '400px'}, mx: {xs: 0, md: 2}, minHeight: '400px', maxHeight: '40vh', display: 'flex', justifyContent: 'center'}}>
            <Card sx={{backgroundColor: '#E06C9F', maxWidth: {xs: '100%'}, maxHeight: {xs: '100%'}}}>
              <CardMedia
                component= 'img'
                image= 'https://wallpapercave.com/wp/wp4208201.jpg'
                height='60%'
                alt='pink nails in pink liquid'/>
              <CardContent>
                <Button variant='outlined' sx={{borderColor: '#F9C8DF'}}><Typography variant='h6' sx={{color: 'white'}}>View Pricing</Typography></Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
  )
}

export default HomePage
