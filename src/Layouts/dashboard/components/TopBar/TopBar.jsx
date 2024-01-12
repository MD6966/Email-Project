import { AppBar, Avatar, Box, Button, Toolbar, Typography, MenuItem, Menu, Divider } from '@mui/material'
import React, { useState } from 'react'
import { boxStyles, iconStyles, inputStyles, internalText } from './styles/styles'
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsDialog from './components/SettingsDialog';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { current_State, logout } from '../../../../store/actions/folderActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import SettingsPage from './components/SettingsPage';
import { Add, ArrowDropDown, Folder } from '@mui/icons-material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
const MySwal = withReactContent(Swal)

const TopBar = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.email.user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const data = useSelector((state)=>state)
  const navigate = useNavigate()
  // console.log(data)
  const openM = Boolean(anchorEl);
  const outlook_data = useSelector((state)=>state.folder.folders)
  const google_data = useSelector((state)=>state.folder.folders_google)
  const current_state = useSelector((state)=>state.folder.current_state)
  // console.log(google_data)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(true)
  };
  const sweetAlertFunc = () => {
    let timerInterval;
    MySwal.fire({
      title: "Switching Account Please Wait",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Done",
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }
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
  // console.log(outlook_data)
  const accounts = [];

  if (google_data?.length > 0) {
    accounts.push({ name: 'Google', data: google_data, type: 'Google' });
  }

  if (outlook_data.length > 0) {
    accounts.push({ name: 'Outlook', data: outlook_data, type: 'Outlook' });
  }
  const handleMenuItemClick = (type) => {
    dispatch(current_State(type))
    setAnchorEl(null)
    sweetAlertFunc()
  }
  const handlebtn = () => {
    navigate('/ai-assistant')
  }
  return (
    <div>
        <AppBar sx={{background:'#F0EDED', position:'static'}} elevation={0}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', }}>
              <Box sx={{display:'flex', alignItems:'center'}}>
              <Avatar sx={{mr:2}}>
                E
              </Avatar>
              <input 
              type='text'
              style={inputStyles}
              placeholder='Search here'
              />
              <Button 
              component={Link}
              to="/assistant"
              variant='outlined' size="small" sx={{ml:1}}>
                AI Assistant 
              </Button>
              <Button 
              component={Link}
              to="/files"
              variant='outlined' 
              size="small"
              sx={{ml:1}}
              startIcon={
                <Folder />
              }
              >
                Files
              </Button>
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
                  onClose={()=>setAnchorEl(null)}
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
                      const disabledS = current_state === val.type
                      return(
                         <MenuItem onClick={()=>handleMenuItemClick(val.type)} disabled={disabledS}>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                        <Avatar src="/user2.png" /> 
                        <Box>
                        <Typography sx={{ml:1, fontWeight:'bold'}}>{val.name} <span style={{display:disabledS ? 'inline' : 'none', marginLeft:'2px'}}>(Currently Using)</span></Typography>
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
