import { Box, Typography, styled } from '@mui/material'
import React from 'react'
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(3, 5)
}))
const StyledHeading = styled(Typography)(({theme})=> ({
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
    width:'750px'
}))
const CustomMarketing = () => {
  return (
    <>
    <StyledRoot>
        <StyledHeading>
            Explore Spike's Features for Streamlined Workflows and Enhanced Team Connectivity.
        </StyledHeading>
        <Box sx={{display:'flex', justifyContent:'center', mt:4}}>
        <StyledSub>
        Dive into a comprehensive tour of Spike, where innovation meets functionality.
        Explore the intuitive features, seamless workflows, and enhanced connectivity
        that redefine how teams collaborate and achieve unparalleled productivity. 
        </StyledSub>
        </Box>
    </StyledRoot>
        <img src="/marketing-bottom.png" style={{height:'100vh', width:'100%'}} />
    </>
  )
}

export default CustomMarketing
