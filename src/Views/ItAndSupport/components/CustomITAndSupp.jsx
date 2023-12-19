import { Box, Typography, styled } from '@mui/material'
import React from 'react'
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(0, 10),
    marginTop:theme.spacing(-10),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))
const StyledTypo = styled(Typography)(({theme})=> ({
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
    textAlign:'center'
}))
const StyledSub = styled(Typography)(({theme})=> ({
    color: '#000',
    textAlign: 'justify',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    width:'790px',
    marginTop:theme.spacing(5)
})) 
const CustomITAndSupp = () => {
  return (
    <StyledRoot>
        <Box>

        <StyledTypo>
        Dive into Sparkamis's Features for Enhanced
        Technical Workflows and Seamless
        Team Connectivity.
        </StyledTypo>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StyledSub>
        Dive into a comprehensive tour of Spike, where innovation meets functionality.
        Explore the intuitive features, seamless workflows, and enhanced connectivity 
        that redefine how teams collaborate and achieve unparalleled productivity.
        </StyledSub>
        </Box>
        <img src='/it-custom.png' style={{height:'100vh', width:'100%', overflow:'hidden', marginTop:'35px'}}/>
        </Box>
    </StyledRoot>
  )
}

export default CustomITAndSupp
