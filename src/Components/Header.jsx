import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Header = () => {
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
                        <Button variant='outlined' 
                        component={Link}
                        to='/blogs'
                        >
                            Blogs
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px', }}>

                        <Button sx={{ fontSize: '12px', fontWeight: 700, color: '#000' }}
                        component={Link}
                        to='/dashboard'
                        >Login</Button>
                        <Button sx={{ border: '1px solid #023A6D', padding: '12px 16px', fontSize: '12px', color: '#000', fontWeight: 700 }}>Book a Demo</Button>
                        <Button sx={{ fontSize: '12px', fontWeight: 700, color: '#000' }}>Get Sparkamis for Free</Button>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Header
