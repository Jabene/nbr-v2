import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import DateRangeIcon from '@mui/icons-material/DateRange'
import flowerNails from '../../assets/flower-nails.png'
import './HomePage.css'


const HomePage = () => {
  return (
    <Container className='home-page' maxWidth='xxl' sx={{display: 'flex'}}>
      <Typography variant='h2' my={2}>Nails By Rylee</Typography>
      <Paper elevation={3} sx={{width: {xs: '500px', sm:'650px', md: '925px'}, maxWidth: {xs: '100vw'}, height: {xs:'300px', sm:'400px', md:'600px'}, minHeight: {xs:'200px'}, maxHeight: {xs:'700px'}}} className='home-img'></Paper>
      <Grid container wrap mt={4} columns={{xs: 3, s: 6, md: 8}} sx={{justifyContent: 'center'}}>
        <Grid item xs={12}>
          <Typography align='left' variant='h3's sx={{borderBottom: 'solid black 2px'}}>Services</Typography>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} m={2}>
          <Card sx={{maxWidth: '500px', minWidth: {xs: '300px'}}}>
            <CardHeader avatar={<DateRangeIcon />} title='Service 1' titleTypographyProps={{fontSize: '25px'}} sx={{backgroundColor: '#E06C9F'}} />
            <CardContent sx={{backgroundColor: '#F9C8DF'}}>
              <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}

export default HomePage
