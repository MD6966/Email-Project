import { AppBar, Avatar, Box, Button, Toolbar, Typography, MenuItem, Menu, Divider } from '@mui/material'
import React, { useState } from 'react'
import { boxStyles, iconStyles, inputStyles, internalText } from './styles/styles'
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsDialog from './components/SettingsDialog';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { logout } from '../../../../store/actions/folderActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import SettingsPage from './components/SettingsPage';
import { Add, ArrowDropDown } from '@mui/icons-material';
const TopBar = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.email.user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(true)
  };
  console.log(user, "USER")
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
  const accounts = [
    {name:'Syed Mudasser', email:'smudasser36@gmail.com'},
    {name:'Mudasser Jaafri', email:'mudasser.dev44@gmail.com'}
  ]
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
                    {user?.name || ''}
                  </Typography>
                </Box>
                  {/* <Box sx={boxStyles}>
                    <Typography style={internalText}>
                        SMA
                    </Typography>
                  </Box> */}
                  <Button
                  id="basic-button"
                  aria-controls={openM ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openM ? 'true' : undefined}
                  onClick={handleClick}
                  variant='contained'
                  sx={{background:'#040263',
                  '&:hover': {
                    background:'#040263'
                  }
                }}
                  endIcon={
                    <ArrowDropDown />
                  }
                >
                  Switch Account
                </Button>
                   <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openM}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <Box sx={{p:2, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <Avatar sx={{height:'80px', width:'80px'}} src="/user.png"/>
                    <Typography sx={{mt:1, fontWeight:'bold'}} variant='h6'>{user?.name || ''}</Typography>
                     <Typography>{user?.email || ''}</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{p:2}}>
                  <Typography fontWeight="bold" mb={2}>
                    Manage Your Accounts
                  </Typography>
                  {
                    accounts.map((val, ind)=> {
                      return(
                         <MenuItem>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                        <Avatar src="/user2.png" /> 
                        <Box>
                        <Typography sx={{ml:1, fontWeight:'bold'}}>Outlook</Typography>
                        <Typography sx={{ml:1, fontWeight:'bold'}}>{user?.email || ''}</Typography>
                        </Box>
                        </Box>
                        </MenuItem>
                      )
                    })
                  }
                  <Button variant='outlined' fullWidth endIcon={<Add />} sx={{mt:2}}
                  onClick={handleClose}
                  >
                    Ad Another Account
                  </Button>
                  </Box>
                  {/* <MenuItem>
                  <Box sx={{display:'flex', alignItems:'center'}}>
                  <Avatar /> 
                  <Box>
                  <Typography sx={{ml:1, fontWeight:'bold'}}>Google</Typography>
                  <Typography sx={{ml:1, fontWeight:'bold'}}>{user?.email || ''}</Typography>
                  </Box>
                  </Box>
                  </MenuItem> */}
                </Menu>
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
