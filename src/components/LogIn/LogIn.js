import React from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
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
  const [loading, isLoading] = React.useState(false)

  const logIn = async () => {
    isLoading(true)
    const user = await apiCalls.logIn({ email, password })
    isLoading(false)
    user.id ? saveUserInfo(user) : handleError(true, `We couldn't find an account with those credentials`)
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
    isLoading(true)
    const newAccount = await apiCalls.register({firstName, lastName, email, password})
    isLoading(false)
    if(newAccount) {
      logIn()
    } else {
      handleError(true, `Couldn't create an account with those credentials. Please check your inputs or use a different email`)
    }
  }

  const submit = e => {
    e && e.preventDefault()
    if(register) {
      registerUser()
    } else {
      logIn()
    }
  }

  const keyDown = e => {
    if(e.keyCode === 13) {
      submit()
    }
  }

  const switchForm = () => {
    toggleForm(!register)
    updateError('')
  }

  return (
    <Paper
      sx={{
        mt: '40px',
        minWidth: {xs: '350px', sm: '450px', md: '600px'},
        minHeight: {xs: '350px', sm: '450px', md: '600px'} }}>
      <form className='log-in-form' onSubmit={submit}>
        <Typography variant='h3' my={3}>Log In</Typography>
        {register &&
          <>
        <TextField required id='first-name' error={error} label='First Name' variant='outlined' onChange={e => changeFirstName(e.target.value)} onKeyDown={keyDown} sx={{width: '50%', my: 2}} />
        <TextField required id='last-name' error={error} label='Last Name' variant='outlined' onChange={e => changeLastName(e.target.value)} onKeyDown={keyDown} sx={{width: '50%', my: 2}} />
        <TextField required id='phone' error={error} label='Phone Number' type='phone' variant='outlined' onChange={e => changePhone(e.target.value)} onKeyDown={keyDown} sx={{width: '50%', my: 2}} />
          </>
        }
          <TextField required id='email' error={error} label='Email' type='email' variant='outlined' onChange={e => changeEmail(e.target.value)} onKeyDown={keyDown} sx={{width: '50%', my: 2}} />
          <TextField required id='password' error={error} label='Password' type='password' variant='outlined' onChange={e => changePassword(e.target.value)} onKeyDown={keyDown} sx={{width: '50%', my: 2}} />
          {loading && <CircularProgress />}
        <div>
          {error && <Alert severity='error'>{errorMessage}</Alert>}
          <Button onClick={submit} disabled={loading} variant='outlined' sx={{ mx: 1, my: 2}}>{register ? 'Register' : 'Log in'}</Button>
          <Button onClick={switchForm} disabled={loading} variant='outlined' sx={{ mx: 1, my: 2}}>{register ? 'Already have an account?' : 'Create an account'}</Button>
        </div>
      </form>
    </Paper>
  )
}

export default LogIn
