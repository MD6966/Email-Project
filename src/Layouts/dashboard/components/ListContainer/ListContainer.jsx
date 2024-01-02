import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { buttonStyles, labelList, listContainer } from './styles'
import { Add, Edit, History, } from '@mui/icons-material'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import SnoozeIcon from '@mui/icons-material/Snooze';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ComposePopup from './components/ComposePopup';
import { useDispatch, useSelector } from 'react-redux';
import { getListData, setList } from '../../../../store/actions/listActions';
import { folderName, resetLoading } from '../../../../store/actions/folderActions';
import G_L_Dialog from './components/G_L_Dialog';
import { getAllGroups } from '../../../../store/actions/outlookGroupActions';
const ListContainer = () => {
  const data = useSelector((state)=>state.folder)
  // console.log(data.folders, 'DATAREDUX')
  const [selectedItem, setSelectedItem] = useState(data.folders[4]);
  const [open, setOpen] = React.useState(false);
  const [openG, setOpenG] = React.useState(false);
  const [composeOpen, setComposeOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dTitle, setDtitle] = useState('')
  const [name, setName] = useState('')
  const [groups, setGroups] = useState([])
  const dispatch = useDispatch()
  const groupsData = () => {
    dispatch(getAllGroups()).then((result) => {
      setGroups(result.data.payload)
    }).catch((err) => {
      console.log(err)
    });
  }
  useEffect(()=> {
    groupsData()
  }, [])
  const handleComposeClick = () => {
    setComposeOpen(true);
  };

  const handleComposeClose = () => {
    setComposeOpen(false);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    dispatch(folderName(item.folder_name))
    // dispatch(getListData(item.folder_id))
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickG = () => {
    setOpenG(!openG);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);
  const handleClickM = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialogOpen = (title, name) => {
    setDtitle(title)
    setName(name)
    setDialogOpen(true)
  }
  const handleCloseDialog =()=> {
    setDialogOpen(false)
    setDtitle('')
    setName('')
  }
  const topRef = useRef(null);
  const hnadleGroupBtn = (val) => {
    dispatch(setList(val))
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(()=> {
    dispatch(getListData(selectedItem?.folder_id))
    dispatch(resetLoading())
  },[selectedItem])
  // console.log(selectedItem.folder_name, "Selected")
  return (
    <>
    <Box sx={listContainer} ref={topRef}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={buttonStyles}
          variant='contained'
          startIcon={<Edit />}
          onClick={handleComposeClick}
        >
          Compose
        </Button>
        {composeOpen && 
        
        <ComposePopup open={composeOpen} onClose={handleComposeClose} />
        }
      </Box>
      <Box sx={{ mt: 2 }}>
        <List>
          {
          data.folders.length > 0 ?
          data.folders?.map((val, ind) => {
            return(
              <ListItem
              key={ind}
              disablePadding
              onClick={() => handleItemClick(val)}
              sx={{
                backgroundColor: selectedItem?.folder_name === val?.folder_name ? '#B5DCFF' : 'transparent' || '',
                height: '35px',
                cursor:'pointer',
                px:1,
                '&:hover': {
                  backgroundColor: selectedItem?.folder_name === val?.folder_name ? '#B5DCFF' : 'rgba(0, 0, 0, 0.04)' || '',
                },
              }}
            >
              
                <ListItemIcon>
                {
                  val.folder_name == 'Archive' ?
                  <ArchiveIcon /> : val.folder_name === 'Conversation History' ?
                  <History /> : val.folder_name === 'Deleted Items' ?
                  <DeleteIcon /> : val.folder_name === 'Drafts' ?
                  <DraftsIcon /> : val.folder_name === 'Inbox' ?
                  <AllInboxIcon />  : val.folder_name === 'Junk Email' ?
                  <DeleteSweepIcon /> : val.folder_name === 'Outbox' ?
                  <SendIcon /> :val.folder_name === 'Sent Items' ?
                  <MarkChatReadIcon /> : val.folder_name === 'Snoozed' ?
                  <SnoozeIcon /> : null
   
              }
                 </ListItemIcon>
                <ListItemText primary={
                  <Typography sx={{fontSize:'12px', fontWeight:'bold'}}>
                    {val.folder_name}
                  </Typography>
                } />
            </ListItem>
            )
          })
        :'Please Login First'
        }
        </List>
        <Box sx={{mt:2}}>
          <List>
          <ListItemButton onClick={handleClick}
          sx={{
            height:'35px',
            background:open ? '#B5DCFF' : 'none',
            '&:hover': {
              backgroundColor: '#B5DCFF',
            }
          }}
          >
        <ListItemText primary="Label" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Button size='small' variant='outlined' sx={{my:1}} fullWidth
        onClick={()=>handleDialogOpen('Label', 'label' )}
        startIcon={
          <Add />
        }
        >
          Add Label
        </Button>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, height:'35px' }}>
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography sx={{ml:-3}}>
                Mudasser
                </Typography>
                <Add sx={{fontSize:'15px', ml:3}}
                onClick={
                  handleClickM
                }
                />
              </Box>
            } />
          </ListItemButton>
        </List>
      </Collapse>
          </List>
        </Box>
        <Box>
          <List>
          <ListItemButton onClick={handleClickG}
          sx={{
            height:'35px',
            background:openG ? '#B5DCFF' : 'none',
            '&:hover': {
              backgroundColor: '#B5DCFF',
            }
          }}
          >
        <ListItemText primary="Groups" />
        {openG ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openG} timeout="auto" unmountOnExit>
        <Button size='small' variant='outlined' sx={{my:1}} fullWidth
         onClick={()=>handleDialogOpen('Group', 'group' )}
        startIcon={
          <Add />
        }
        >
          Add Group
        </Button>
        <List component="div" disablePadding>
            {
              groups[0]?.map((val)=> {
                // console.log(val)
                return(
                  <>
                  <ListItemButton sx={{ pl: 4, height:'35px' }}
                  onClick={()=>hnadleGroupBtn('Group')}
                  >
                  <ListItemIcon>
                    <LabelIcon />
                  </ListItemIcon>
                  <ListItemText primary={
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Typography sx={{ ml: -3 }}>
                        {val.name.length > 8 ? val.name.slice(0, 8) + '...' : val.name}
                      </Typography>
                      <Add sx={{fontSize:'15px', ml:3}}
                      onClick={
                        handleClickM
                      }
                      />
                    </Box>
                  } />
                  
                  </ListItemButton>
                  </>
                )
              })
            }
        </List>
      </Collapse>
          </List>
        </Box>
        {/* <Box sx={{ mt: 2 }}>
          <div>{selectedItem.content}</div>
        </Box> */}
      </Box>
    </Box>
    <G_L_Dialog 
    open={dialogOpen}
    close={handleCloseDialog}
    name={dTitle}
    group={groupsData}
    />
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openM}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ListContainer;
