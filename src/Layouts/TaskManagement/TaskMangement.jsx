import { AppBar, Avatar, Box, CssBaseline, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Stack, Toolbar, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from '../dashboard/components/SideBar/SideBar'
import { drawerStyles, iconStyles, iconStylesDashboard } from '../dashboard/components/SideBar/styles'
import { makeStyles } from '@mui/styles'
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TaskIcon from '@mui/icons-material/Task';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GradingIcon from '@mui/icons-material/Grading';
import AddIcon from '@mui/icons-material/Add';
import { Link, Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx'
import AddTask from './Component/AddTask'
import FavouriteTask from './Component/FavouriteTask'
import PlannedTask from './Component/PlannedTask'
import AssignTask from './Component/AssignTask'
import CompleteTask from './Component/CompleteTask'
const drawerWidth = 400;
const icons = [
    { id: 1, icon: <EmailIcon style={iconStylesDashboard} /> },
    { id: 2, icon: <CalendarMonthIcon style={iconStylesDashboard} /> },
    { id: 4, icon: <PermContactCalendarIcon style={iconStylesDashboard} /> },
    { id: 5, icon: <UpcomingIcon style={iconStylesDashboard} /> },
    { id: 6, icon: <FilterListIcon style={iconStylesDashboard} /> },
    // { id: 7, icon: <TaskIcon style={iconStyles} /> },

]
const icon = [
    { id: 1, icon: <SettingsIcon style={iconStylesDashboard} /> },
    { id: 2, icon: <HelpOutlineIcon style={iconStylesDashboard} /> },


]
const Sidebar = [
    { id: 1, icon: <TaskIcon />, text: 'Create Task', icon2: <AddIcon />, to: 'addtask' },
    { id: 2, icon: <StarBorderIcon />, text: 'Favorite', to: 'favourite' },
    // { id: 2, icon: <AppShortcutIcon />, text: 'Planned', to: 'planned' },
    { id: 2, icon: <AccountCircleIcon />, text: 'Assign to me', to: 'assign' },
    { id: 2, icon: <GradingIcon />, text: 'Completed Tasks', to: 'complete' },


]
const useStyles = makeStyles((theme) => ({
    selected: {
        background: "#fff",
        borderRadius: 10,
    },
    icon: {
        marginLeft: "auto",
    },
    drawer: {},
    btn: {},
}));
const SearchField = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                // paddingRight: '50px',
                borderRadius: '8px',
                backgroundColor: '#CDC6C6',
                width: 500,

            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Search here"
                sx={{ ml: 1, color: 'black' }}
            />
        </Box>
    );
};
const TaskSearch = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                // paddingRight: '50px',
                borderRadius: '8px',
                // backgroundColor: '#CDC6C6',
                border: '1px solid black',
                width: '100%',

            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Task"
                sx={{ ml: 1, color: 'inherit' }}
            />
        </Box>
    );
};

const TaskMangement = () => {

    const theme = useTheme()
    const classes = useStyles()
    const [selectedItem, setSelectedItem] = useState(null);
    const location = useLocation();
    console.log(location, "++++++")
    useEffect(() => {
        const matchingItem = Sidebar.find((item) => item.to === location.pathname);
        if (matchingItem) {
            setSelectedItem(matchingItem);
        }
    }, [location.pathname]);

    const handleListItemClick = (item) => {
        setSelectedItem(item);
    };
    return (
        <>



            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#F0EDED' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center', padding: '5px 40px', gap: '100px', }}>


                        <Box flex={3.5} sx={{ display: 'flex', alignItems: 'center' }}>
                            {icons.map((val, index) => (
                                <Box key={index} sx={{ display: 'flex' }}>
                                    {val.icon}
                                </Box>
                            ))}

                            <SearchField />
                        </Box>


                        <Box flex={0.5} sx={{ display: 'flex', alignItems: 'center' }}>
                            {icon.map((val, index) => (
                                <Box key={index} sx={{ display: 'flex' }}>
                                    {val.icon}
                                </Box>
                            ))}
                            <Avatar>
                                M
                            </Avatar>

                        </Box>


                    </Toolbar>
                </AppBar>
                <Box sx={{ display: 'flex' }}>
                    <Box flex={1}><Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        }}
                    >
                        <Toolbar />

                        <Box flex={1} sx={{ overflow: 'auto' }}>
                            <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <TaskSearch />
                                {Sidebar.map((val) => (
                                    <ListItem key={val} disablePadding component={Link}
                                        to={val.to}
                                        // className={clsx(classes.root, {
                                        //     [classes.selected]: selectedItem === val.id,
                                        // })}
                                        sx={{ mb: 2, textDecoration: 'none', color: 'black' }}>
                                        {/* <Link to={`/taskManagement/${val.path}`}> */}
                                        <ListItemButton
                                            selected={selectedItem === val.id}
                                            onClick={(event) =>
                                                handleListItemClick(event, val.id)
                                            }
                                            sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <ListItemIcon>
                                                    <Box sx={{ backgroundColor: '#BDB5B5', height: '40px', width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                                                        {val.icon}
                                                    </Box>
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {val.text}
                                                </ListItemText>
                                            </Box>
                                            <Box>
                                                {val.icon2}
                                            </Box>
                                        </ListItemButton>
                                        {/* </Link> */}
                                    </ListItem>
                                ))}

                            </List>
                            {/* <Divider /> */}
                            {/* <List>
                            {Sidebar.map((val, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText>
                                            {val.text}
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List> */}
                        </Box>



                    </Drawer></Box>
                    <Box flex={2} mt={12} p={'20px'}>
                        {selectedItem && (
                            <div>
                                {
                                    location.pathname === '/taskManagement/addtask'
                                    && <AddTask />
                                }
                                {
                                    location.pathname === '/taskManagement/favourite'
                                    && <FavouriteTask />
                                }
                                {
                                    location.pathname === '/taskManagement/planned'
                                    && <PlannedTask />
                                }
                                {
                                    location.pathname === '/taskManagement/assign'
                                    && <AssignTask />
                                }
                                {
                                    location.pathname === '/taskManagement/complete'
                                    && <CompleteTask />
                                }
                                {/* <Outlet /> */}
                                {/* <h2>Selected Item: {selectedItem.text}</h2> */}

                                {/* <p>{selectedItem.icon}</p> */}
                            </div>
                        )}
                    </Box>
                </Box>


            </Box >
        </>
    )
}

export default TaskMangement