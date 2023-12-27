import { Box, Card, CardContent, styled } from '@mui/material'
import React from 'react'
const StyledRoot = styled(Box)(({theme})=>({
    padding:theme.spacing(10,5)
}))
const MainContent = () => {
  return (
    <StyledRoot>
       <Box sx={{
        width:'50vw',
        height:'60vh',
        border:'1px solid rgba(0,0,0,0.2)',
        borderRadius:'15px',
        overflow:'hidden'
       }}>
        <Box sx={{
            background:'#e2e2e2',
            height:'13%',
            
        }}>
      This is the main Contetnzzzaaaa
        </Box>
       </Box>
    </StyledRoot>
  )
}

export default MainContent
