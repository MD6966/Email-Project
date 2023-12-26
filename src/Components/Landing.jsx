import { Avatar, Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import RepeatCom from './RepeatCom';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import Footer from './Footer';
import Tool from './Tool';
import LoadingBar from 'react-top-loading-bar'
const gridData = [
    {
        text: "Sparkamis transformed our team collaboration efficient, organized, and the AI assistant is a game-changer. Invaluable for boosting productivity.make it a must have for streamlined collaboration.",
        avatarSrc: "https://i.pinimg.com/564x/0b/cf/08/0bcf08920d1a452e31ead6811082675b.jpg",
        name: 'board'
    },
    {
        text: "Sparkamis's customizable workspaces  Inbox, collaborative Docs, and Real-time updates, integrated chat,and top-notch security make it a must have for streamlined collaboration.",
        avatarSrc: "https://i.pinimg.com/564x/38/2e/19/382e193cf2cfbf7501aaa1f9cc081aa5.jpg",
        name: 'John Smith'

    },
    {
        text: "Sparkamis is a game-changer! Smart Inbox, collaborative Docs, and seamless communication make it a must-have for boosting team collaboration and collaboration.",
        avatarSrc: "https://i.pinimg.com/564x/02/96/33/02963310cf1651b45e1c0c32e6035a2d.jpg",
        name: 'Ajay Patel'
    }
];
const buttonStyle1 = {
    backgroundColor: '#02013B',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    fontWeight: 600,
    '&:hover': {
        // color: '#02013B',
        backgroundColor: '#023A6D'
    }
}
const buttonStyle2 = {
    border: '1px solid #02013B',
    color: '#02013B',
    fontSize: '16px',
    padding: '10px'
}
const Landing = ({setprogress}) => {
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.down('lg'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    useEffect(()=> {
        setprogress(20)
        setTimeout(()=> {
          setprogress(100)
        }, 1000)
    }, [])
    return (
        <>
            <Box sx={{ mt: 9, height: '100vh', backgroundColor: '#FFF', overflow: 'hidden', padding: '0px 50px', }}>
                <Grid container spacing={5} sx={{ mt: 3, }}>
                    <Grid item lg={7}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <Typography sx={{ color: '#023A6D', fontSize: '36px', fontWeight: 800, }}> Revolutionizing Team Communication with All-in-One Efficiency</Typography>
                            <Typography sx={{ color: '#023A6D', fontSize: '16px', fontWeight: 400, }}>Sparkamis integrates email, chat, file sharing, video conferencing, and task management seamlessly, empowering teams to collaborate effortlessly and enhance productivity in a unified communication platform.</Typography>
                            <Box sx={{ display: 'flex', gap: '20px' }}>
                                <Button sx={buttonStyle1}> Get Started For Free</Button>
                                <Button sx={buttonStyle2}><PlayCircleOutlinedIcon /> Book a Demo</Button>
                            </Box>
                            <Typography sx={{ textAlign: 'start', fontSize: '12px', fontWeight: 500, color: '#023A6D' }}>based on 5,000+ reviews from different platforms </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <img src="/public/TrelloUICollage_4x 1.png" style={{ objectFit: 'contain', height: '70vh', width: '110%' }} alt="" />
                    </Grid>
                </Grid>
            </Box >
            <Header />
            <RepeatCom />

            <Box sx={{ backgroundColor: '#f9f9f9', padding: '0rem 0px', color: '#03294B' }}>
                <Box sx={{ padding: isSmall ? '15px 40px' : '50px 90px', }}>
                    <Grid container spacing={3} sx={{ padding: isSmall ? '2rem 0rem' : '4rem 0rem' }}>
                        <Grid item lg={7} sm={12} xs={12}>
                            <Box sx={{ textAlign: isMedium ? 'center' : 'none' }}>
                                <Typography sx={{ fontSize: isSmall ? '20px' : '30px', fontWeight: 800 }}>CollabBoost</Typography>
                                <Typography sx={{ fontSize: isSmall ? '16px' : '16px', fontWeight: 200 }}>Unify remote teams effortlessly with Sparkamis. Centralize project discussions,brainstorm ideas using Whiteboards, and collaboratively draft plans in shared Docs. Distance becomes a non-issue as Sparkamis fosters seamless teamwork,bringing your projects to new heights.</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '100px', marginTop: '50px' }}>
                                <Box >
                                    <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>Enhance Visibility</Typography>
                                    <Typography sx={{ fontSize: '16px' }}>
                                        <ul>
                                            <li>Real-time Updates</li>
                                            <li>Shared Workspaces</li>
                                            <li>Advanced Reporting</li>
                                        </ul>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>Automate Work</Typography>
                                    <Typography>
                                        <ul >
                                            <li style={{ fontSize: '16px', fontWeight: 400 }}>Workflow Automation</li>
                                            <li style={{ fontSize: '16px', fontWeight: 400 }}>Integrations</li>
                                            <li style={{ fontSize: '16px', fontWeight: 400 }}>Customizable Workflows</li>
                                            <li style={{ fontSize: '16px', fontWeight: 400 }}>Task Automation</li>
                                        </ul>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={5} md={6} xs={12} sm={12}>
                            <Box>
                                <img
                                    src="/public/image-main.png"
                                    alt="abc"
                                    style={{ objectFit: 'cover', width: '100%', height: '333px' }}

                                />


                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ backgroundColor: ' #02013B', color: 'white', padding: '50px 20px' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '36px' }}>Elevating Team Collaboration and Productivity to New Heights</Typography>
                    <Grid container spacing={10}>
                        {gridData.map((item, index) => (
                            <Grid key={index} item lg={4} md={6} sm={12} sx={12}>
                                <Box
                                    sx={{
                                        fontSize: '16px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '40px 60px',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '8px',
                                        height: '55vh',
                                        marginTop: "50px"

                                    }}
                                >
                                    <Typography sx={{ fontSize: '16px' }}>{item.text}</Typography>
                                    {item.avatarSrc && (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                                            <Typography sx={{ color: '#3D77EA' }}>{item.name}</Typography>
                                            <Avatar alt="Avatar" src={item.avatarSrc} />
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box >
            {/* <Tool /> */}
            <Footer />
        </>
    )
}

export default Landing
