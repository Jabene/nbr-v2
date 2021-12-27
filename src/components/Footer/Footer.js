import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <Grid container sx={{minHeight: '150px', width: '100vw', backgroundColor: 'black'}}>
      <Grid item xs={6}>
        <Typography variant='h6' color='white'>Socials</Typography>
        <IconButton sx={{backgroundColor: 'white', m: 1}}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{backgroundColor: 'white', m: 1}}>
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h6' color='white'>Web Dev</Typography>
        <IconButton href="https://github.com/Jabene" sx={{backgroundColor: 'white', m: 1}}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/joshua-benefield-033898206/" sx={{backgroundColor: 'white', m: 1}}>
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Footer
