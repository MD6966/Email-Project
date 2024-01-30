import { Box, Typography } from '@mui/material'
import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";


const NoContent = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'50vh', flexDirection:'column'}}>
      <Typography variant='h4' fontWeight="bold" color="#888">
        No Content
      </Typography>
      <Typography sx={{mt:1, color:'#888'}}>
        Click on the message to view the contents
      </Typography>
      <IoChatbubbleEllipses size={100} color='#888' />
      
    </Box>
  )
}

export default NoContent
