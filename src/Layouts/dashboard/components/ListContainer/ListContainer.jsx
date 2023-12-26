import { Box, Button } from '@mui/material'
import React from 'react'
import { buttonStyles, listContainer } from './styles'
import { Edit } from '@mui/icons-material'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const ListContainer = () => {
  const listData = [
    {icon:<AllInboxIcon />, title:'Inbox'},
    {icon:<DeleteSweepIcon />, title:'Junk Mail'},
    {icon: <DraftsIcon />, title:'Drafts'},
    {icon: <SendIcon />, title:'Sent Items'},
    {icon:<DeleteIcon />, title:'Deleted Items'},
    {icon:<ArchiveIcon />, title:'Archived'},
    {icon:<SpeakerNotesIcon />, title:'Notes'},
    {icon:<QuestionAnswerIcon />, title:'Conversation'},

  ]
  return (
    <Box sx={listContainer}>
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Button 
      sx={buttonStyles}
      variant='contained'
      startIcon={
        <Edit />
      }>
        Compose
      </Button>
        </Box>
    </Box>
  )
}

export default ListContainer
