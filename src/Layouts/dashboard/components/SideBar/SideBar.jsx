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
import { useSelector } from 'react-redux';
import { deleteAllGoogle, markAllReadGoogle, markAllUnreadGoogle } from '../../../../store/actions/mailActions';
import Loading from '../../../../Components/loaders/loading';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { Success } from '../../../../Components/alerts/Success';
const icons = [
    { id: 1, icon: <EmailIcon style={iconStyles} /> },
    { id: 2, icon: <CalendarMonthIcon style={iconStyles} /> },
    { id: 4, icon: <PermContactCalendarIcon style={iconStyles} /> },
    { id: 5, icon: <UpcomingIcon style={iconStyles} /> },
    { id: 6, icon: <FilterListIcon style={iconStyles} /> },
    // { id: 7, icon: <TaskIcon style={iconStyles} /> },

]

const data = [
    { icon: <Delete sx={{ color: '#BEBDBD', }} />, title: 'Delete' },
    { icon: < Archive sx={{ color: '#BEBDBD', }} />, title: 'Archive' },
    // { icon: <CleaningServicesIcon sx={{ color: '#BEBDBD', }} />, title: 'Sweep' },
    { icon: <CheckBoxIcon sx={{ color: '#BEBDBD', }} />, title: 'Mark All Read' },
    { icon: <MarkChatUnreadIcon sx={{ color: '#BEBDBD', }} />, title: 'Mark all unread' },

]

const SideBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const isShow = useSelector((state)=>state.folder?.selected_state)
    const selectedIds = useSelector((state)=>state.folder?.selectedIds)
    const type = useSelector((state)=>state.folder.src)
    // console.log(type)
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
    const handleIconsClick = (val) => {
        const body = {
            id: selectedIds
        }
        if(val.title === 'Mark All Read') {
            setLoader(true)
            if(type === 'Google') {
                dispatch(markAllReadGoogle(body)).then((result) => {
                    setLoader(false)
                    alert("All mails are marked as read")
                    window.location.reload()
                    console.log(result)
                }).catch((err) => {
                    setLoader(false)
                    console.log(err)
                });
            }
        }
        else if(val.title === 'Mark all unread') {
            setLoader(true)
            if(type === 'Google') {
                dispatch(markAllUnreadGoogle(body)).then((result) => {
                    setLoader(false)
                    alert("All mails are marked as unread")
                    window.location.reload()
                    console.log(result)
                }).catch((err) => {
                    setLoader(false)
                    console.log(err)
                });
            }
        }
        else if (val.title === 'Delete') {
            setLoader(true)
            dispatch(deleteAllGoogle(body)).then((result) => {
                setLoader(false)
                    alert("All mails are deleted")
                    window.location.reload()
            }).catch((err) => {
                setLoader(false)
                console.log(err)
            });
        }
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
                                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1,cursor: isShow ? 'pointer' : 'not-allowed'  }}
                                onClick={()=>handleIconsClick(val)}
                                >
                                    {val.icon}
                                    <Typography sx={{ ml: 1, mt: 0.25, color: isShow ? '#02013B' : '#BEBDBD', }}>
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
                {
                    loader &&
                    <Loading 
                    title="Please Wait"
                    open={true}
                    />
                }
        </>
    )
}

export default SideBar
