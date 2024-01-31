import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = ({open, title,}) => {
  return (
    <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
             <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true} 
                />
          </Box>
        </DialogContent>
       </Dialog>
  )
}

export default Loading
