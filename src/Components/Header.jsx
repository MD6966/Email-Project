import { AppBar, Box, Button, Toolbar, Typography, Popover, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#F0EDED', color: '#000', padding: '7px 44px' }} >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', gap: '20px', fontSize: '16px', fontWeight: 800, }}>
                        <Typography>
                            Product
                        </Typography>
                        <Typography >
                            Solutions
                        </Typography>
                        <Typography >
                            Pricing
                        </Typography>
                        <Typography >
                            Email App
                        </Typography>
                        <Typography >
                            Plans
                        </Typography>
                        <Button
                            sx={{ color: '#000', background: 'transparent' }}
                            aria-describedby={id}
                            onMouseEnter={handleClick}
                        >
                            Services
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <List>
                                <ListItem button component={Link} to='/software-dev' onClick={handleClose}>
                                    <ListItemText primary="Software Developemnt" />
                                </ListItem>
                                <ListItem button component={Link} to='/group-n-chat' onClick={handleClose}>
                                    <ListItemText primary="Group and Chat" />
                                </ListItem>
                                <ListItem button component={Link} to='/marketing' onClick={handleClose}>
                                    <ListItemText primary="Marketing" />
                                </ListItem>
                                <ListItem button component={Link} to='/it-n-support' onClick={handleClose}>
                                    <ListItemText primary="IT & Support" />
                                </ListItem>
                                <ListItem button component={Link} to='/agencies' onClick={handleClose}>
                                    <ListItemText primary="Agencies" />
                                </ListItem>
                            </List>
                        </Popover>
                        <Button
                            sx={{ color: '#000', background: 'transparent' }}
                            component={Link}
                            to='/blogs'
                        >
                            Blogs
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', }}>

                        <Button sx={{ fontSize: '12px', fontWeight: 700, color: '#000' }}
                            component={Link}
                            to='/login'
                        >Login</Button>
                        <Button sx={{ fontSize: '12px', fontWeight: 700, color: '#000' }}
                            component={Link}
                            to='/register'
                        >SignUp</Button>
                        <Button sx={{ border: '1px solid #023A6D', padding: '12px 16px', fontSize: '12px', color: '#000', fontWeight: 700 }}>Book a Demo</Button>
                        <Button sx={{ fontSize: '12px', fontWeight: 700, color: '#000' }}>Get Sparkamis for Free</Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
