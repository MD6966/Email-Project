import { Box, Button, Drawer, Stack, Typography } from '@mui/material'
import React from 'react'
import { SideBarStyles, bottomBar, drawerStyles, iconStyles } from './styles'
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Archive, Delete } from '@mui/icons-material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icons = [
    {id:1, icon:<EmailIcon style={iconStyles}/>},
    {id:2, icon:<CalendarMonthIcon style={iconStyles}/>},
    {id:4, icon:<PermContactCalendarIcon style={iconStyles}/>},
    {id:5, icon:<UpcomingIcon style={iconStyles}/>},
    {id:6, icon:<FilterListIcon style={iconStyles}/>},

]

const data = [
    {icon:<Delete sx={{color:'#BEBDBD', cursor:'pointer'}}/>, title:'Delete'},
    {icon:< Archive sx={{color:'#BEBDBD', cursor:'pointer'}}/>, title:'Archive'},
    {icon:<CleaningServicesIcon sx={{color:'#BEBDBD', cursor:'pointer'}}/>, title:'Sweep'},
    {icon:<DriveFileMoveIcon sx={{color:'#BEBDBD', cursor:'pointer'}}/>, title:'Move to'},
    {icon:<CheckBoxIcon sx={{color:'#02013B', cursor:'pointer'}}/>, title:'Mark All Read'}

]

const SideBar = () => {
  return (
    <>
    <Drawer variant='permanent' sx={{zIndex:'-5', }}
      PaperProps={{
        sx: drawerStyles ,
      }}
    >
             {
            icons.map((icon)=> {
                return(
                    <Stack sx={{display:'flex', alignItems:'center'}}>
                        {icon.icon}
                    </Stack>
                )
            })
        }
    </Drawer>
    <Box>
        <Box style={bottomBar}>
            <Button size='small' variant='contained' sx={{background:'#02013B'}}>
                All Mails
            </Button>
            {
                data.map((val, ind)=> {
                    return(
                <Box sx={{display:'flex', alignItems:'center', ml:1}}>
                {val.icon}
            <Typography sx={{ml:1, mt:0.25, color:ind == 4 ? '#02013B' :'#BEBDBD', cursor:'pointer'}}>
                    {val.title}
            </Typography>
                </Box>
                    )
                })
            }
        </Box>
    </Box>
    {/* <Box sx={{display:'flex'}}>
    <Box sx={SideBarStyles}>
       
    </Box>
    
        </Box> */}
    </>
  )
}

export default SideBar
