import { Box, Button, ButtonGroup, ClickAwayListener, Dialog, DialogActions, 
    DialogContent, DialogTitle, Grid, Grow, IconButton, List, ListItemText, 
    MenuItem, MenuList, Paper, Popper, TextField, Typography, ListItem, Divider } from '@mui/material';
import React, { useState } from 'react'
import './styles.css'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
const options = [ 'Schedule Send'];
const ComposePopup = ({onClose }) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [dialog, setDialog] = React.useState(false)
   
    const handleClick = () => {
      console.info(`You clicked ${options[selectedIndex]}`);
    };
  
    const handleMenuItemClick = () => {
      setOpen(false);
      setDialog(true)
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
    const handleSend = () => {
        console.log('Sending email:', { subject, message });
        onClose();
      };
  return (
    <Box className="compose-popup"
    sx={{
        height:'500px',
        width:'550px',
        borderRadius:'20px',
        p:0.5,
        background:'#E2E2E2'
    }}
    >
    <Box sx={{px:2, mt:2, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Typography fontWeight="bold">
            New Messages
        </Typography>
        <Box>
            <OpenInFullIcon sx={{mr:2, fontSize:'18px'}} />
            <MinimizeIcon sx={{mr:2, fontSize:'18px'}} />
            <CloseIcon sx={{mr:2, fontSize:'18px', cursor:'pointer'}} onClick={onClose} />
        </Box>
    </Box>
    <Box sx={{mt:3, background:'#fff', height:'86%', borderRadius:'20px', display:'flex', overflow:'hidden', p:3}}>
        <Box sx={{width:'100%'}}>

        <Box sx={{height:'95%'}}>
        <TextField variant='standard' label='To' fullWidth/>
        <TextField variant='standard' label='Subject' fullWidth sx={{mt:1}}/>
        </Box>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Box>
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button"
          sx={{borderRadius:'20px'}}
        
        >
        <Button onClick={handleClick}
          sx={{borderRadius:'20px'}}
        
        >Send</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{borderRadius:'20px'}}

        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      onClick={handleMenuItemClick}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
            </Box>
            <Box sx={{ml:2}}>
                <Box>
                    <AttachFileIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                    <InsertLinkIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                    <EmojiEmotionsIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                    <AddToDriveIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                </Box>
            </Box>
        </Box>
        </Box>
     <Dialog open={dialog} onClose={()=>setDialog(false)} fullWidth>
        <DialogTitle>
            <Typography variant='h5'>Schedule Send</Typography>
            <Typography>Pakistan Standard Time</Typography>
        </DialogTitle>
        <DialogContent>
        <List>
      {[
        { title: "Tomorrow morning", time: "Dec 28, 1:00 pm" },
        { title: "Tomorrow evening", time: "Dec 28, 8:00 pm" },
        { title: "Monday morning", time: "Dec 1, 8:00 am" },
      ].map((item, index) => (
        <ListItem
          key={index}
          button
          sx={{
            "&:hover": {
              backgroundColor: "#e2e2e2",
            },
          }}
        >
          <ListItemText
            primary={item.title}
            secondary={item.time}
            sx={{ display: "flex", justifyContent: "space-between" }}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box sx={{display:'flex', alignItems:'center'}}>
        <TextField
        size='small' 
        type='datetime-local'
        sx={{mt:1}}
        />
        <Typography sx={{ml:2, mt:1}}>Select Date & Time </Typography>
        <Button sx={{mt:1, ml:4}} variant='contained'>Schedule</Button>
        </Box>
    
        </DialogContent>
     </Dialog>

    </Box>
  </Box>
  )
}

export default ComposePopup
