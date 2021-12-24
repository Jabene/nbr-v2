import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import IconButton from '@mui/material/IconButton'

import HomeIcon from '@mui/icons-material/Home'
import CollectionsIcon from '@mui/icons-material/Collections'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

const DrawerLeft = ({drawerLeft, toggleDrawerLeft}) => {
  return (
    <Drawer anchor='left' open={drawerLeft} onClose={() => toggleDrawerLeft(false)} sx={{display: 'flex', flexDirection: 'column'}}>
      <List>
        <ListItem disablePadding sx={{width: '300px'}}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{width: '300px'}}>
          <ListItemButton>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
            <ListItemText primary='Gallery' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{width: '300px'}}>
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary='Pricing' />
          </ListItemButton>
        </ListItem>

      </List>
    </Drawer>
  )
}

export default DrawerLeft
