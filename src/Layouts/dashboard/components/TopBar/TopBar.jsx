import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { boxStyles, iconStyles, inputStyles, internalText } from './styles/styles'
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
const TopBar = () => {
  return (
    <div>
        <AppBar sx={{background:'#F0EDED', position:'static'}} elevation={0}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
              <Box sx={{display:'flex'}}>
              <Avatar sx={{mr:2}}>
                E
              </Avatar>
              <input 
              type='text'
              style={inputStyles}
              placeholder='Search here'
              />
              </Box>
              <Box sx={{display:'flex', alignItems:'center', color:'#4A4848',}}>
                <HelpIcon style={iconStyles} />
                <SettingsIcon style={iconStyles}/>
                <Box style={iconStyles}>
                  <Typography >
                    Mudasser Jaafri
                  </Typography>
                </Box>
                  <Box sx={boxStyles}>
                    <Typography style={internalText}>
                        SMA
                    </Typography>
                  </Box>
              </Box>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default TopBar
