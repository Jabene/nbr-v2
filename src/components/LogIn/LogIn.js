import React from 'react'
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import apiCalls from '../../apiCalls'

const LogIn = ({ updateUser }) => {
  const [email, changeEmail] = React.useState('')
  const [password, changePassword] = React.useState('')
  const [register, toggleForm] = React.useState(false)
  const [error, updateError] = React.useState(false)
  const [errorMessage, updateErrorMessage] = React.useState('')

  const logIn = async () => {
    register && toggleForm(false)
    const user = await apiCalls.logIn({ email, password })
    user[0] ? saveUserInfo(user[0]) : handleError(true, `We couldn't find an account with those credentials`)

  }

  const saveUserInfo = user => {
    updateUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const handleError = (error, message) => {
    updateError(error)
    updateErrorMessage(message)
  }


  const registerUser = e => {
    !register && toggleForm(true)
  }

  return (
    <Grid container mt={4} sx={{backgroundColor: 'rgba(255, 255, 255, 0.5)', minWidth: '350px', maxWidth: '750px'}} >
      <Grid item xs={12} mt={4}>
        <Typography variant='h3'>Log In</Typography>
      </Grid>
      <Grid item xs={12} mt={4} >
        <TextField id='email' error={error} label='Email' type='email' variant='outlined' onChange={e => changeEmail(e.target.value)} sx={{minWidth: '300px'}} />
      </Grid>
      <Grid item xs={12} mt={4} >
        <TextField id='password' error={error} label='Password' type='password' variant='outlined' onChange={e => changePassword(e.target.value)} sx={{minWidth: '300px'}} />
      </Grid>
      <Grid item xs={12} my={4} >
        {error && <Alert severity='error'>{errorMessage}</Alert>}
        <Button onClick={logIn} variant='outlined' sx={{ mx: 1}}>Log In</Button>
        <Button onClick={registerUser} variant='outlined' sx={{ mx: 1}}>Register</Button>
      </Grid>
      {register && <><p>hi</p></>}
    </Grid>
  )
}

export default LogIn
