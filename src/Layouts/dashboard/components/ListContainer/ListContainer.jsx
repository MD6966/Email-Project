import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { buttonStyles, labelList, listContainer } from './styles'
import { Add, Edit, StarBorder } from '@mui/icons-material'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const ListContainer = () => {
  const listData = [
    { icon: <AllInboxIcon />, title: 'Inbox', content: 'Inbox content goes here' },
    { icon: <DeleteSweepIcon />, title: 'Junk Mail', content: 'Junk Mail content goes here' },
    { icon: <DraftsIcon />, title: 'Drafts', content: 'Drafts content goes here' },
    { icon: <SendIcon />, title: 'Sent Items', content: 'Sent Items content goes here' },
    { icon: <DeleteIcon />, title: 'Deleted Items', content: 'Deleted Items content goes here' },
    { icon: <ArchiveIcon />, title: 'Archived', content: 'Archived content goes here' },
    { icon: <SpeakerNotesIcon />, title: 'Notes', content: 'Notes content goes here' },
    { icon: <QuestionAnswerIcon />, title: 'Conversation', content: 'Conversation content goes here' },
  ];

  const [selectedItem, setSelectedItem] = useState(listData[0]); // Initially select the first item
  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    <Box sx={listContainer}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={buttonStyles}
          variant='contained'
          startIcon={<Edit />}
        >
          Compose
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <List>
          {listData.map((val, ind) => (
            <ListItem
              key={ind}
              disablePadding
              onClick={() => handleItemClick(val)}
              sx={{
                backgroundColor: selectedItem.title === val.title ? '#B5DCFF' : 'transparent',
                height: '35px',
                cursor:'pointer',
                px:1,
                '&:hover': {
                  backgroundColor: selectedItem.title === val.title ? '#B5DCFF' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              
                <ListItemIcon>{val.icon}</ListItemIcon>
                <ListItemText primary={val.title} />
            </ListItem>
          ))}
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
        onClick={()=>setDialogOpen(true)}
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
            <ListItemText primary="Mudasser" />
          </ListItemButton>
        </List>
      </Collapse>
          </List>
        </Box>
        <Box sx={{ mt: 2 }}>
          <div>{selectedItem.content}</div>
        </Box>
      </Box>
    </Box>
    <Dialog open={dialogOpen} fullWidth onClose={()=> setDialogOpen(false)}>
        <DialogTitle>
          New Label
        </DialogTitle>
        <DialogContent>
          <TextField size='small' label="Enter new label name" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined'>
            Cancel
          </Button>
          <Button variant='contained'>
            Create
          </Button>
        </DialogActions>
    </Dialog>
    </>
  );
}

export default ListContainer;
