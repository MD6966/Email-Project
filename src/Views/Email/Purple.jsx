import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const Purple = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "40px", backgroundColor: '#525194', color: 'white', padding: '40px', borderRadius: '80px 80px 0px 0px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 800, }}>Unleashing Email's Power, Embracing Chat's Simplicity</Typography>
                <Button sx={{ backgroundColor: '#02013B', fontSize: '16px', fontWeight: 700, color: 'white', padding: '10px' }}>Get Started Today</Button>
                <Box sx={{
                    display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', '& > :not(:last-child)': {
                        marginRight: '30px',
                    },
                }}>
                    <Typography>
                        <DoneIcon /> Unified Collaboration Platform
                    </Typography>
                    <Typography sx={{ ':not(:last-child)': { marginRight: '20px' } }}>
                        <DoneIcon /> Enhanced Communication Efficiency
                    </Typography>
                    <Typography> <DoneIcon />Boosted Productivity and Performance</Typography>
                </Box>
                <div style={{ position: 'relative', height: '70vh', width: '100%' }}>
                    <img src="public/image 347.png" alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    <img src="public/image 348.png" alt="" style={{ height: '50vh', position: 'absolute', top: '50%', left: '65%', transform: 'translate(-50%, -50%)' }} />
                </div>
            </Box>
        </>
    )
}

export default Purple
