import { Box, Button, ButtonGroup, ClickAwayListener, Dialog, DialogActions, 
    DialogContent, DialogTitle, Grid, Grow, IconButton, List, ListItemText, 
    MenuItem, MenuList, Paper, Popper, TextField, Typography, ListItem, Divider, Chip, InputAdornment, InputLabel, Avatar } from '@mui/material';
import React, { useState } from 'react'
// import './styles.css'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { useDispatch } from 'react-redux';
// import { scheduleEmail, sendMail, sendMailGoogle } from '../../../../../store/actions/mailActions';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { Close, ReportGmailerrorred } from '@mui/icons-material';
import { RotatingLines } from 'react-loader-spinner';
const options = [ 'Schedule Send'];
const MySwal = withReactContent(Swal)
const initialValues = {
  email:'',
  subject:'',
  description:'',
  attachment:'',
  ccEmail:'',
  bccEmail:''

}
const SendEmail = ({onClose, type, data }) => {
    // console.log(type, 'THIS ISSSSSS')
    const [formValues, setFormValues] = useState(initialValues)
    const [attachment, setAttachment] = useState(null);
    const [loading, setLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const [emails, setEmails] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const anchorRef = React.useRef(null);
    const [showCcText, setShowCc] = useState(true);
    const [showBccText, setShowBcc] = useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [dialog, setDialog] = React.useState(false)
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [selectedDateTime , setSelectedDateTime] = useState(null)
    const generateDateOptions = () => {
      const options = [];
      const currentDate = new Date();
  
      for (let i = 1; i <= 3; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        
        const option = {
          title: i === 1 ? "Tomorrow morning" : i === 2 ? "Tomorrow evening" : `In ${i} days`,
          time: nextDate.toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
        };
  
        options.push(option);
      }
      return options;
    }
    const dateOptions = generateDateOptions();
    const handleClick = () => {
      console.info(`You clicked ${options[selectedIndex]}`);
    };
    
    const isValidEmail = (email) => {
      // You can implement your own email validation logic here
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const handleMenuItemClick = (option) => {
       if(formValues.subject.length < 1) {
        enqueueSnackbar('Please enter subject of email', {
          variant:'info'
        })
      }
      else if(formValues.description.length < 1) {
        enqueueSnackbar('Please enter message', {
          variant:'info'
        })
      }
      else{
        setOpen(false);
        setDialog(true)
        const selectedOption = dateOptions[selectedItem];
        if (selectedOption) {
          setSelectedDateTime(selectedOption.time);
    }
      }
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
  
    const handleDelete = (emailToDelete) => {
      setEmails((prevEmails) => prevEmails.filter((email) => email !== emailToDelete));
    };
  
    const handleSend = () => {
        console.log('Sending email:', { subject, message });
        onClose();
      };
      const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({
          ...formValues,
          [name]:value,
          attachment: attachment,
        })
      }
      const handleSubmit = (e) => {
          e.preventDefault()
          setLoading(true)
          const formData = new FormData()
          formData.append('email', formValues.email)
          formData.append('subject', formValues.subject)
          formData.append('description', formValues.description)
          if(formValues.bccEmail)
          {
            formData.append('bccEmail', formValues.bccEmail)
          }
          if(formValues.ccEmail)
          {
            formData.append('ccEmail', formValues.ccEmail)
          }
          if (attachment) {
            formData.append('attachment', attachment);
          }
          if(type === 'Outlook') {
            dispatch(sendMail(formData)).then((result) => {
              enqueueSnackbar(result.data.message, {
                variant:'success'
              })
              onClose()
              setLoading(false)
              setFormValues(initialValues)
            }).catch((err) => {
              setLoading(false)
                console.log(err)
            });
          }
          else if (type === 'Google') {
            dispatch(sendMailGoogle(formData)).then((result) => {
              enqueueSnackbar(result.data.message, {
                variant:'success'
              })
              onClose()
              setLoading(false)
              setFormValues(initialValues)
            }).catch((err) => {
              setLoading(false)
                console.log(err)
            });
          }
      }
      const handleSendSchedule = () => {
        setLoader(true)
        const formData = new FormData()
        formData.append('recipients', formValues.email)
        formData.append('subject', formValues.subject)
        formData.append('description', formValues.description)
        formData.append('time', selectedDateTime)
        dispatch(scheduleEmail(formData)).then((result) => {
          setLoader(false)
          setDialog(false)
          onClose()
          enqueueSnackbar(result.data.message, {
            variant:'success'
          })
        }).catch((err) => {
          setLoader(false)
          console.log(err)
        });
        // console.log(selectedDateTime, 'THIS IS SELECTED')

      }
      const handleCcClick = () => {
        setShowCc(false);
      };
      const handleCloseCC = () => {
        setShowCc(true);
      }
      const handleCloseBCC = () => {
        setShowBcc(true)
      }
      const handleBccClick = () => {
        setShowBcc(false);
      };
  return (
    <Box className="compose-popup"
    sx={{
        minHeight:'500px',
        width:'550px',
        borderRadius:'20px',
        p:0.5,
        background:'#E2E2E2'
    }}
    >
    <Box sx={{px:2, mt:2, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Typography fontWeight="bold">
            New Message
        </Typography>
        <Box>
            <OpenInFullIcon sx={{mr:2, fontSize:'18px'}} />
            <MinimizeIcon sx={{mr:2, fontSize:'18px'}} />
            <CloseIcon sx={{mr:2, fontSize:'18px', cursor:'pointer'}} onClick={onClose} />
        </Box>
    </Box>
    <Box sx={{mt:3, background:'#fff', height:'86%', borderRadius:'20px', display:'flex', overflow:'hidden', p:3}}>
        <Box sx={{width:'100%'}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ height: '95%', overflowY: 'auto' }}>
          <TextField variant='standard' fullWidth
              disabled
              label={`Send message to ${data.name}`}
              name='email'
              value={formValues.email}
              onChange={handleChange}
              sx={{mb:2}} 
               InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showCcText &&
                    <Typography sx={{cursor:'pointer', '&:hover':{textDecoration:'underline'}}}
                    onClick={handleCcClick}
                    >
                      Cc/ 
                    </Typography>
                    }
                    {
                      showBccText &&
                    <Typography sx={{cursor:'pointer', '&:hover':{textDecoration:'underline'}}}
                    onClick={handleBccClick}
                    
                    >
                      Bcc 
                    </Typography>
                    }
                  </InputAdornment>
                ),
              }}
              />
              {
                !showCcText &&
              <TextField label="Cc Email" fullWidth variant='standard' sx={{mb:2}}
              name='ccEmail'
              value={formValues.ccEmail}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleCloseCC}>
                      <Close />
                    </IconButton>
                  </InputAdornment>
                ),
              }} 
              />
              }
              {
                !showBccText &&
                <TextField label="Bcc Email" fullWidth variant='standard' sx={{mb:2}}
                name='bccEmail'
                value={formValues.bccEmail}
                onChange={handleChange}

                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleCloseBCC}>
                        <Close />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
              }
        <TextField 
        label="subject"
        fullWidth
        variant='standard'
        name='subject'
        value={formValues.subject}
        onChange={handleChange}
        required
        />
        <TextField 
        multiline
        rows={attachment ? 8 : 10}
        variant='standard'
        name='description'
        value={formValues.description}
        onChange={handleChange}
        fullWidth
        required
        sx={{mb:2}}
        />
        {attachment && (
        <Box sx={{mb:2}}>
      <Typography >Selected File: {attachment.name}</Typography>
        </Box>
    )}
      </Box>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Box>
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button"
          sx={{borderRadius:'20px'}}
        
        >
        <Button
          sx={{borderRadius:'20px'}}
          type='submit'
          variant={loading ? 'disabled' : 'contained'}
        
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
                      onClick={()=>handleMenuItemClick(option)}
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
                <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
      <AttachFileIcon sx={{ fontSize: '20px', mr: 2 }} />
    </label>
    <input
      type="file"
      id="file-upload"
      accept=".pdf, .doc, .docx, .txt" 
      onChange={(e) => setAttachment(e.target.files[0])}
      style={{ display: 'none' }}
    />
                    {/* <AttachFileIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/> */}
                    <InsertLinkIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                    <EmojiEmotionsIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                    <AddToDriveIcon sx={{fontSize:'20px', mr:2, cursor:'pointer'}}/>
                </Box>
            </Box>
        </Box>
      </form>
      
        </Box>
     <Dialog open={dialog} onClose={()=>setDialog(false)} fullWidth>
        <DialogTitle>
            <Typography variant='h5'>Schedule Send</Typography>
            <Typography>Pakistan Standard Time</Typography>
        </DialogTitle>
        <DialogContent>
        <List>
      {dateOptions.map((item, index) => (
        <ListItem
        key={index}
        button
        selected={index === selectedItem} 
        sx={{
          "&:hover": {
            backgroundColor: "#e2e2e2",
          },
          backgroundColor: index === selectedItem ? "#e2e2e2" : "inherit", 
          color: index === selectedItem ? "#000" : "#000", 
        }}
        onClick={() => setSelectedItem(index)}
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
        value={selectedDateTime || ""}
        onChange={(e) => setSelectedDateTime(e.target.value)}
        />
        <Typography sx={{ml:2, mt:1}}>Select Date & Time </Typography>
        {
          loader ?
          <RotatingLines
              strokeColor="#040263"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
            :
        <Button sx={{mt:1, ml:4}} variant='contained' onClick={handleSendSchedule}>Schedule</Button>
        }
        </Box>
    
        </DialogContent>
     </Dialog>

    </Box>
  </Box>
  )
}

export default SendEmail
