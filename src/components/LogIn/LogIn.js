import React from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import apiCalls from '../../apiCalls'
import './LogIn.css'

const LogIn = ({ updateUser }) => {
  const [email, changeEmail] = React.useState('')
  const [password, changePassword] = React.useState('')
  const [firstName, changeFirstName] = React.useState('')
  const [lastName, changeLastName] = React.useState('')
  const [phone, changePhone] = React.useState('')
  const [register, toggleForm] = React.useState(false)
  const [error, updateError] = React.useState(false)
  const [errorMessage, updateErrorMessage] = React.useState('')

  const logIn = async () => {
    if(register) {
      toggleForm(false)
      handleError(false, '')
      return
    }
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

  const registerUser = async () => {
    if(!register) {
      toggleForm(true)
      handleError(false, '')
      return
    }
    const newUser = await apiCalls.register({firstName, lastName, email, password})
    newUser[0] ? saveUserInfo(newUser[0]) : handleError(true, 'That email already exists')
  }

  return (
    <Paper sx={{mt: '20px', }}>
      <form className='log-in-form'>
        <Typography variant='h3' my={2}>Log In</Typography>
        {register &&
          <>
        <TextField id='first-name' error={error} label='First Name' variant='outlined' onChange={e => changeFirstName(e.target.value)} sx={{width: '50%', my: 2}} />
        <TextField id='last-name' error={error} label='Last Name' variant='outlined' onChange={e => changeLastName(e.target.value)} sx={{width: '50%', my: 2}} />
        <TextField id='phone' error={error} label='Phone Number' type='phone' variant='outlined' onChange={e => changePhone(e.target.value)} sx={{width: '50%', my: 2}} />
          </>
        }
          <TextField  id='email' error={error} label='Email' type='email' variant='outlined' onChange={e => changeEmail(e.target.value)} sx={{width: '50%', my: 2}} />
          <TextField  id='password' error={error} label='Password' type='password' variant='outlined' onChange={e => changePassword(e.target.value)} sx={{width: '50%', my: 2}} />
        <div>
          {error && <Alert severity='error'>{errorMessage}</Alert>}
          <Button onClick={logIn} variant='outlined' sx={{ mx: 1, my: 2}}>Log In</Button>
          <Button onClick={registerUser} variant='outlined' sx={{ mx: 1, my: 2}}>Register</Button>
        </div>
      </form>
    </Paper>
  )
}

export default LogIn
