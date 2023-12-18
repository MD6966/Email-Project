import React from 'react'
import Header from '../Components/Header'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import Footer from './Footer';
const gridData = [
    {
        text: "Sparkamis transformed our team collaboration  efficient, organized,and the AI assistant is a  game changer.Invaluable for boosting productivity.",
        avatarSrc: "https://i.pinimg.com/564x/0b/cf/08/0bcf08920d1a452e31ead6811082675b.jpg",
        name: 'board'
    },
    {
        text: "Sparkam is customizable workspaces revolutionized our project management.Real time updates, integrated chat,and top notch security make it a must have for streamlined collaboration.",
        avatarSrc: "https://i.pinimg.com/564x/38/2e/19/382e193cf2cfbf7501aaa1f9cc081aa5.jpg",
        name: 'John Smith'

    },
    {
        text: "Sparkamis is a game-changer! Smart Inbox, collaborative Docs, and seamless communication make it a must have for boosting team collaboration and productivity.",
        avatarSrc: "https://i.pinimg.com/564x/02/96/33/02963310cf1651b45e1c0c32e6035a2d.jpg",
        name: 'Ajay Patel'
    }
];
const Custom_Temp = () => {
    return (
        <>
            <Box>
                <Header />
                <Box sx={{ height: '100vh', backgroundColor: '#040255', color: 'white', padding: '160px 50px' }}>
                    <Grid container spacing={10}>
                        <Grid item lg={6} >
                            <Typography sx={{ fontSize: '52px', fontWeight: 700 }}>Unite Colleagues,<br /> Clients, and Partners</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>Elevate collaboration by bringing colleagues, clients, and partners together through dedicated workspaces and intuitive group features. Foster seamless communication,shared insights, and collective productivity with Sparkamis's innovative group capabilities.</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <img src="public/image 349.png" alt="" style={{ height: '323px', width: '100%' }} />
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ height: '100vh', backgroundColor: '#C9C8EE', margin: '50px 50px', padding: '30px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>Chat in group</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>Streamlining Action Item Assignments for Enhanced Productivity. </Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>Elevate collaboration to new heights with Sparkamis,where AI-driven automation transforms workflows for unparalleled efficiency.</Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <video controls autoPlay muted width="100%" height="auto" style={{ borderRadius: '40px' }}>
                                <source src="public/groupchat-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ height: '100vh', backgroundColor: '#F9F8F7', margin: '50px 50px', padding: '20px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>

                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <img src="public/chatg-img.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '40px' }} />
                        </Grid>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>share things</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>Share Links, Embeds, and Beyond for Seamless Seamless Engagement.</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>Facilitate dynamic collaboration by effortlessly sharing project and engaged team environment.</Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ height: '100vh', backgroundColor: '#E9D1DF', margin: '50px 50px', padding: '20px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>Editing</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>Unlocking the Power of Rich Editing for Impactful Communication.</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>Transform your communication style with Sparkamis`s rich editing, effortlessly elevating your messages to convey impact and clarity.</Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <video controls autoPlay muted width="100%" height="auto" style={{ borderRadius: '40px' }}>
                                <source src="public/group-chatvideo1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ height: '100vh', backgroundColor: '#D2FFCB', margin: '50px 50px', padding: '20px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>

                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <img src="public/CU_AI_LP_Agile_V3 1 (1).png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '40px' }} />
                        </Grid>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>organize</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>Chat in Context with Relevant Work for Enhanced Productivity.</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>Sparkamis streamlines bug and issue tracking, ensuring a smooth and efficient development process. </Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ backgroundColor: ' #02013B', color: 'white', padding: '50px 20px', margin: '50px 0px' }}>
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
            </Box>
            <Footer />
        </>
    )
}

export default Custom_Temp
