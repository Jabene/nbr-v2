import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import IconButton from '@mui/material/IconButton'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import ScheduleIcon from '@mui/icons-material/Schedule'
import LogoutIcon from '@mui/icons-material/Logout'

const DrawerRight = ({drawerRight, toggleDrawerRight}) => {

  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <Drawer anchor='right' open={drawerRight} onClose={() => toggleDrawerRight(false)} sx={{display: 'flex', flexDirection: 'column'}}>
      <List>
        <ListItem disablePadding sx={{width: '300px'}}>
          <ListItemButton>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary='Account' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{width: '300px'}}>
          <ListItemButton>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText primary='Appointments' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{width: '300px'}}>
          <ListItemButton onClick={logOut}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Log out' />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerRight
