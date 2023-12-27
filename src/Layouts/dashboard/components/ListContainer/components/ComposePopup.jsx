import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import './styles.css'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
const ComposePopup = ({ open, onClose }) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSend = () => {
        console.log('Sending email:', { subject, message });
        onClose();
      };
  return (
    <Box className="compose-popup"
    sx={{
        height:'400px',
        width:'600px',
        borderRadius:'20px',
        p:0.5,
        background:'#E2E2E2'
    }}
    >
    <Box sx={{px:2, pt:1, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Typography fontWeight="bold">
            New Messages
        </Typography>
        <Box>
            <OpenInFullIcon />
            <MinimizeIcon />
            <CloseIcon />
        </Box>
    </Box>
    <Box sx={{mt:3, background:'#fff', height:'88%', borderRadius:'20px', display:'flex',}}>
        This is Bottom
    </Box>
  </Box>
  )
}

export default ComposePopup
