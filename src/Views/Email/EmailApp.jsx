import React from 'react'
import Header from '../../Components/Header'
import { Avatar, Box, Button, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import Purple from './Purple';
import Footer from '../../Components/Footer';
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
const gridItems = [
    {
        imgSrc: '/public/image 338.png',
        heading: 'Unified Team Alignment',
        description: 'Ensures all team members operate within a  unified platform.Email, chat, file sharing,video conferencing, and task management are seamlessly integrated, fostering consistent communication.'
    },
    {
        imgSrc: '/public/image 339 (1).png',

        heading: 'Enhanced Productivity',
        description: 'Centralized task management promotes organization and productivity.AI powered features assist in generating content, scheduling meetings, and managing tasks efficiently.',
    },

    {
        imgSrc: '/public/image 341 (1).png',
        heading: 'Time-Efficient Workflow',
        description: 'Minimizes the need to switch between multiple tools, allowing teams to concentrateon their tasks. Prioritizes important messages, optimizing time management.',
    },
    {
        imgSrc: '/public/image 343.png',
        heading: 'Customized Workspaces',
        description: 'Customizable workspaces allow teams to create dedicated areas for specific projects projects or teams. Workspaces ensure focus and organization,bringing teams together on shared objectives.',
    },
    {
        imgSrc: '/src/Components/Group 2.png',
        heading: 'Facilitates Decision-Making',
        description: 'Provides real-time access to information,facilitating quicker and informed decision- making.Eliminates confusion by reducing communication overhead, leading to moredecisive actions.',
    },
];
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
const EmailApp = () => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const isLarge = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: '#FFF', overflow: 'hidden', padding: '60px 50px', }}>
                <Grid container spacing={5} sx={{ mt: 3, }}>
                    <Grid item lg={7}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <Typography sx={{ color: '#023A6D', fontSize: '36px', fontWeight: 800, }}>Unleashing Email's Power, Embracing Chat's Simplicity</Typography>
                            <Typography sx={{ color: '#023A6D', fontSize: '16px', fontWeight: 400, }}>Experience the dynamic synergy of potent email capabilities harmonized with the simplicity of chat, offering a communication powerhouse in one integrated solution.</Typography>
                            <Box sx={{ display: 'flex', gap: '20px' }}>
                                <Button sx={buttonStyle1}> Get Started For Free</Button>
                                <Button sx={buttonStyle2}><PlayCircleOutlinedIcon /> Book a Demo</Button>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                <Typography sx={{ textAlign: 'start', fontSize: '12px', fontWeight: 500, color: '#023A6D' }}> based on 5,000+ reviews from different platforms </Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <img src="public/image 352.png" style={{ objectFit: 'contain', height: '50vh', width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Box >

            <Typography sx={{ fontSize: '48px', textAlign: 'center', fontWeight: 800, justifyContent: 'center' }}>Say hello to a new era of email</Typography>

            <Box>
                <Box sx={{ padding: isSmall ? '30px' : '10px 70px', backgroundColor: '#ffffffff', color: '#000' }}>

                    <Grid container spacing={isSmall ? 5 : 10} sx={{ mt: 5 }}>
                        {gridItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {isLarge || isMedium || isSmall ? (
                                    <>

                                        <Grid item xs={12}>
                                            <Box>
                                                <Typography sx={{ fontSize: '22px', fontWeight: 800 }}>
                                                    {item.heading}
                                                </Typography>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 500, marginTop: isSmall ? '30px' : '50px' }}>
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img src={item.imgSrc} style={{ height: '50vh', width: '100%', objectFit: 'cover' }} alt="" />
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        {index % 2 === 0 ? (
                                            <>

                                                <Grid item lg={6} xs={12} sx={{ order: isSmall ? 1 : 0 }}>
                                                    <Box>
                                                        <Typography sx={{ fontSize: isSmall ? '22px' : '40px', fontWeight: 800 }}>
                                                            {item.heading}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '16px', fontWeight: 500, marginTop: '50px' }}>
                                                            {item.description}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item lg={6} xs={12} sx={{ order: isSmall ? 2 : 0 }}>
                                                    <img src={item.imgSrc} style={{ height: '50vh', width: '100%', objectFit: 'cover' }} alt="" />
                                                </Grid>
                                            </>
                                        ) : (
                                            <>

                                                <Grid item lg={6} xs={12}>
                                                    <img src={item.imgSrc} style={{ height: '50vh', width: '100%', objectFit: 'cover' }} alt="" />
                                                </Grid>
                                                <Grid item lg={6} xs={12}>
                                                    <Box>
                                                        <Typography sx={{ fontSize: isSmall ? '22px' : '40px', fontWeight: 800 }}>
                                                            {item.heading}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '16px', fontWeight: 500, marginTop: '50px' }}>
                                                            {item.description}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </>
                                        )}
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </Grid>
                </Box>
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
            <Box sx={{ height: '100vh', backgroundColor: '#DBDBF8', margin: '50px 50px', padding: '30px 0px', borderRadius: '80px' }}>
                <Grid container spacing={5} sx={{ padding: '50px 60px' }}>
                    <Grid item lg={6} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                            <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>Chat in group</Typography>
                            <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>Smart Inbox Prioritization </Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>Leverage the power of email with a Smart Inbox that prioritizes messages by importance and sender.</Typography>
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
                        <img src="public/CU_AI_LP_Agile_V3 1 (2).png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '40px' }} />
                    </Grid>
                    <Grid item lg={6} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                            <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>share things</Typography>
                            <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}> Super search</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}> Supercharge your productivity with Sparkamis's Super Search feature. Effortlessly navigate through emails, files, and messages, ensuring rapid access to information. Simplify your search experience and find what you need in seconds, streamlining your workflow with precision and efficiency.</Typography>
                            <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
            <Purple />
            <Footer />
        </>
    )
}

export default EmailApp
