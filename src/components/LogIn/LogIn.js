import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import apiCalls from '../../apiCalls'

const LogIn = ({ updateUser }) => {
  const [email, changeEmail] = React.useState('')
  const [password, changePassword] = React.useState('')

  const submit = e => {
    e.preventDefault()
    apiCalls.logIn({
      email,
      password
    }).then(response => {
      if(response[0]) {
        console.log('success', response[0])
        updateUser(response[0])
      } else {
        console.log('error', response)
      }
    })
  }

  return (
    <Grid container mt={4} sx={{backgroundColor: 'rgba(255, 255, 255, 0.5)', minWidth: '350px', maxWidth: '750px'}} >
      <Grid item xs={12} mt={4}>
        <Typography variant='h3'>Log In</Typography>
      </Grid>
      <Grid item xs={12} mt={4} >
        <TextField id='email' label='Email' type='email' variant='outlined' onChange={e => changeEmail(e.target.value)} sx={{minWidth: '300px'}} />
      </Grid>
      <Grid item xs={12} mt={4} >
        <TextField id='password' label='Password' type='password' variant='outlined' onChange={e => changePassword(e.target.value)} sx={{minWidth: '300px'}} />
      </Grid>
      <Grid item xs={12} my={4} >
        <Button onClick={submit} variant='outlined'>Log In</Button>
      </Grid>
    </Grid>
  )
}

export default LogIn
