import { AppBar, Avatar, Box, CssBaseline, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../dashboard/components/SideBar/SideBar'
import { drawerStyles, iconStyles, iconStylesDashboard } from '../dashboard/components/SideBar/styles'
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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    { id: 1, icon: <TaskIcon />, text: 'Create Task', icon2: <AddCircleOutlineIcon /> },
    { id: 2, icon: <StarBorderIcon />, text: 'Favorite' },
    { id: 2, icon: <AppShortcutIcon />, text: 'Planned' },
    { id: 2, icon: <AccountCircleIcon />, text: 'Assign to me' },
    { id: 2, icon: <GradingIcon />, text: 'Completed Tasks' },


]
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
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <TaskSearch />
                            {Sidebar.map((val, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <ListItemIcon>
                                                {val.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                                {val.text}
                                            </ListItemText>
                                        </Box>
                                        <Box>
                                            {val.icon2}
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
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
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default TaskMangement