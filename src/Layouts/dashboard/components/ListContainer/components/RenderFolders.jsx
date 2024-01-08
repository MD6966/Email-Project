import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,Button } from '@mui/material'
import React, { useState } from 'react'
import { folderName } from '../../../../../store/actions/folderActions';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import SnoozeIcon from '@mui/icons-material/Snooze';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import { Add, Delete, ExpandLess, ExpandMore, History } from '@mui/icons-material';
import LabelIcon from '@mui/icons-material/Label';
import { useDispatch } from 'react-redux';

const RenderFolders = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openG, setOpenG] = React.useState(false);
  const [composeOpen, setComposeOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dTitle, setDtitle] = useState('')
  const [listData, setListData] = useState([])
  const [name, setName] = useState('')
  const [groups, setGroups] = useState([])
  const dispatch = useDispatch()
  

    console.log(props, 'PROPSSSSSSS')
    const {data} = props
    const handleItemClick = (item) => {
        setSelectedItem(item);
        dispatch(folderName(item.folder_name))
        // dispatch(getListData(item.folder_id))
      };
      const handleDialogOpen = (title, name) => {
        setDtitle(title)
        setName(name)
        setDialogOpen(true)
      }
      const handleClick = () => {
        setOpen(!open);
      };
      const handleClickM = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClickG = () => {
        setOpenG(!openG);
      };
  return (
    <Box sx={{ mt: 2 }}>
    
    <List>
      {
        
      data.folders.length > 0 ?
      data.folders?.map((val, ind) => {
        return(
          <ListItem
          key={val.folder_id}
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
                {val.folder_name === 'Archive' && <ArchiveIcon />}
                {val.folder_name === 'Conversation History' && <History />}
                {val.folder_name === 'Deleted Items' && <DeleteIcon />}
                {val.folder_name === 'Drafts' && <DraftsIcon />}
                {val.folder_name === 'Inbox' && <AllInboxIcon />}
                {val.folder_name === 'Junk Email' && <DeleteSweepIcon />}
                {val.folder_name === 'Sent Items' && <MarkChatReadIcon />}
                {val.folder_name === 'Snoozed' && <SnoozeIcon />}
                {val.folder_name === 'Outbox' && <SendIcon />}


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
    {/* <Box sx={{mt:2}}>
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
    </Box> */}
    {/* <Box sx={{ mt: 2 }}>
      <div>{selectedItem.content}</div>
    </Box> */}
  </Box>
  )
}

export default RenderFolders
