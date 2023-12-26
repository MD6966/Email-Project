import React from 'react'
import Header from '../Components/Header'
import { Avatar, Box, Button, Grid, Rating, Stack, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
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
const Custom_Temp = (props) => {
    return (
        <>
            <Box>
                <Header />
                <Box sx={{ height: '100vh', backgroundColor: props?.color ? props.color :'#040255', color: 'white', padding: '160px 50px' }}>
                    <Grid container spacing={10}>
                        {
                            props.mainImage == false ? 
                        <Grid item lg={12} >
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', px:15}}>
                            <Typography 
                            sx={{ fontSize: '62px', fontWeight: 'bold', color:props.txtColor ? props.txtColor : '' }}>{props?.txt1} {props?.txt2}</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 400 , color:props.txtColor ? props.txtColor : ''}}>{props?.sub}</Typography>
                            </Box></Grid> :
                            <>
                            <Grid item lg={6} >
                                <Typography 
                                sx={{ fontSize: '52px', fontWeight: 700, color:props.txtColor ? props.txtColor : '' }}>{props?.txt1} {props?.txt2}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400 , color:props.txtColor ? props.txtColor : ''}}>{props?.sub}</Typography>
                                </Grid>
                                <Grid item lg={6}>
                            <img src={props?.img} alt="" style={{ height: '323px', width: '100%' }} />
                        </Grid>
                                </> 
                            

                        }
                       

                    </Grid>
                </Box>
                {
                    props.customMarketing && 
                    <props.customMarketing /> 
                }
                {
                    props.customAgencies &&
                    <props.customAgencies />
                }
                <Box sx={{ height: '100vh', backgroundColor: '#C9C8EE', margin: '50px 50px', padding: '30px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>{props?.c1Txt}</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>{props?.c1Heading} </Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>{props?.c1Sub}</Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <video controls autoPlay muted width="100%" height="auto" style={{ borderRadius: '40px' }}>
                                <source src={props?.c1Vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Grid>

                    </Grid>

                </Box>
                <Box sx={{ height: '100vh', backgroundColor: '#F9F8F7', margin: '50px 50px', padding: '20px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>

                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <img src={props?.c2img} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '40px' }} />
                        </Grid>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>{props?.c2txt}</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>{props?.c2Heading}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>{props?.c2Sub}</Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>
                {
                    props.c3Heading &&
                <Box sx={{ height: '100vh', backgroundColor: '#E9D1DF', margin: '50px 50px', padding: '20px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>{props?.c3Txt}</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>{props?.c3Heading}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>{props?.c3Sub}</Typography>
                                <Button sx={{ backgroundColor: '#040255', color: 'white', justifyContent: 'center', padding: '12px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px' }}>Learn More</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <video controls autoPlay muted width="100%" height="auto" style={{ borderRadius: '40px' }}>
                                <source src={props?.c3Vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Grid>

                    </Grid>

                </Box>
                }
                <Box sx={{ height: '100vh', backgroundColor: '#D2FFCB', margin: '50px 50px', padding: '20px 0px', borderRadius: '80px' }}>
                    <Grid container spacing={5} sx={{ padding: '50px 60px' }}>

                        <Grid item lg={6} sx={{ marginTop: '40px' }}>
                            <img src={props?.c4Img} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '40px' }} />
                        </Grid>
                        <Grid item lg={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'center', alignItems: 'start' }}>


                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>{props?.c4Txt}</Typography>
                                <Typography sx={{ color: '#04034B', fontSize: '45px', fontWeight: 800, lineHeight: '50px' }}>{props?.c4Heading}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#033562' }}>{props?.c4Sub} </Typography>
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
                                            <Stack>
                                            <Typography sx={{ color: '#3D77EA' }}>{item.name}</Typography>
                                            <Rating name="half-rating-read" defaultValue={5}  readOnly sx={{mt:1.5}}/>
                                            </Stack>
                                            <Avatar alt="Avatar" src={item.avatarSrc} />

                                        </Box>
                                    )}
                                </Box>
                                
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "40px", backgroundColor: '#525194', color: 'white', padding: '40px', borderRadius: '80px 80px 0px 0px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 800, }}>{props?.headingP}</Typography>
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
                    <img src="/bottom1.png" alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    <img src="bottom2.png" alt="" style={{ height: '50vh', position: 'absolute', top: '50%', left: '65%', transform: 'translate(-50%, -50%)' }} />
                </div>
            </Box>
            <Footer />
        </>
    )
}

export default Custom_Temp
