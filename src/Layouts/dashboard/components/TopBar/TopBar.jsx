import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { boxStyles, iconStyles, inputStyles, internalText } from './styles/styles'
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsDialog from './components/SettingsDialog';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout } from '../../../../store/actions/folderActions';
import { useDispatch } from 'react-redux';
const TopBar = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const handleSignout = () => {
    confirmAlert({
      title: "Log Out?",
      message: "Are you sure to want to log out ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(logout());
          },
        },
        {
          label: "No",
        },
      ],
    });
  }
  return (
    <div>
        <AppBar sx={{background:'#F0EDED', position:'static'}} elevation={0}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
              <Box sx={{display:'flex'}}>
              <Avatar sx={{mr:2}}>
                E
              </Avatar>
              <input 
              type='text'
              style={inputStyles}
              placeholder='Search here'
              />
              </Box>
              <Box sx={{display:'flex', alignItems:'center', color:'#4A4848',}}>
                <HelpIcon style={iconStyles} />
                <SettingsIcon style={iconStyles}
                onClick={()=>setOpen(true)}
                />
                <Box style={iconStyles}>
                  <Typography >
                    Mudasser Jaafri
                  </Typography>
                </Box>
                  <Box sx={boxStyles}>
                    <Typography style={internalText}>
                        SMA
                    </Typography>
                  </Box>
                  <Button variant='contained' sx={{ml:1}} onClick={handleSignout}>
                    Sign Out
                  </Button>
              </Box>

            </Toolbar>
        </AppBar>
        <SettingsDialog open={open} close={()=>setOpen(false)} />
    </div>
  )
}

export default TopBar
