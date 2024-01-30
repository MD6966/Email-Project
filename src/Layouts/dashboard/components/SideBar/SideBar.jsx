import { Box, Button, Drawer, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SideBarStyles, bottomBar, drawerStyles, iconStyles } from './styles'
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Archive, Delete, VideoCall } from '@mui/icons-material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TaskIcon from '@mui/icons-material/Task';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { createMeeting } from '../../../../store/actions/folderActions';
const icons = [
    { id: 1, icon: <EmailIcon style={iconStyles} /> },
    { id: 2, icon: <CalendarMonthIcon style={iconStyles} /> },
    { id: 4, icon: <PermContactCalendarIcon style={iconStyles} /> },
    { id: 5, icon: <UpcomingIcon style={iconStyles} /> },
    { id: 6, icon: <FilterListIcon style={iconStyles} /> },
    // { id: 7, icon: <TaskIcon style={iconStyles} /> },

]

const data = [
    { icon: <Delete sx={{ color: '#BEBDBD', cursor: 'pointer' }} />, title: 'Delete' },
    { icon: < Archive sx={{ color: '#BEBDBD', cursor: 'pointer' }} />, title: 'Archive' },
    { icon: <CleaningServicesIcon sx={{ color: '#BEBDBD', cursor: 'pointer' }} />, title: 'Sweep' },
    { icon: <DriveFileMoveIcon sx={{ color: '#BEBDBD', cursor: 'pointer' }} />, title: 'Move to' },
    { icon: <CheckBoxIcon sx={{ color: '#02013B', cursor: 'pointer' }} />, title: 'Mark All Read' }

]

const SideBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const handleTask = () => {
        navigate('/taskManagement')
        // alert('Hello ')
    }
    const handleZoomMeeting = () => {
        setLoading(true)
        dispatch(createMeeting()).then((result) => {
            setLoading(false)
            // console.log(result.data[0])
            window.open(result.data[0]?.start_url, '_blank');
            // window.location.href = result.data[0]?.start_url
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        });
    }
    return (
        <>
            <Drawer variant='permanent' sx={{ zIndex: -5 }}
                PaperProps={{
                    sx: drawerStyles,
                }}
            >
                <Box sx={{ mt: 11 }}>
                    {
                        icons.map((icon) => {
                            return (
                                <Stack sx={{ display: 'flex', alignItems: 'center', }} key={icon.id}>
                                    {icon.icon}
                                </Stack>
                            )
                        })
                    }

                </Box>
            </Drawer >
            <Box>
                <Box style={bottomBar}>
                    <Button size='small' variant='contained' sx={{ background: '#02013B' }}>
                        All Mails
                    </Button>
                    {
                        data.map((val, ind) => {
                            return (
                                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                                    {val.icon}
                                    <Typography sx={{ ml: 1, mt: 0.25, color: ind == 4 ? '#02013B' : '#BEBDBD', cursor: 'pointer' }}>
                                        {val.title}
                                    </Typography>
                                </Box>
                            )
                        })
                    }
                    <Button onClick={handleTask} size='small' variant='contained' sx={{ background: '#02013B' }}>
                        task
                    </Button>
                    <Button 
                    onClick={!loading ? handleZoomMeeting : ''}
                    variant='contained' 
                    startIcon={<VideoCall />}
                    sx={{ background: '#02013B' }}>
                        {
                            loading ? 
                            'Generating Link...' :
                            'Zoom Meeting'

                        }
                    </Button>
                </Box>
            </Box>

        </>
    )
}

export default SideBar
