
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
const gridItems = [
    {
        imgSrc: '/image 338.png',
        heading: 'Unified Team Alignment',
        description: 'Ensures all team members operate within a unified platform.Email, chat, file sharing,video conferencing, and task management are seamlessly integrated, fostering consistent communication.'
    },
    {
        imgSrc: '/image 339 (1).png',
        heading: 'Enhanced Productivity',
        description: 'Centralized task management promotes organization and productivity.AI powered features assist in generating content, scheduling meetings, and managing tasks efficiently.',
    },

    {
        imgSrc: '/image 341 (1).png',
        heading: 'Time-Efficient Workflow',
        description: 'Minimizes the need to switch between multiple tools, allowing teams to concentrateon their tasks. Prioritizes important messages, optimizing time management.',
    },
    {
        imgSrc: '/image 343.png',
        heading: 'Customized Workspaces',
        description: 'Customizable workspaces allow teams to create dedicated areas for specific projects projects or teams. Workspaces ensure focus and organization,bringing teams together on shared objectives.',
    },
    {
        imgSrc: '/src/Components/Group 2.png',
        heading: 'Facilitates Decision-Making',
        description: 'Provides real-time access to information,facilitating quicker and informed decision- making.Eliminates confusion by reducing communication overhead, leading to moredecisive actions.',
    },
];
const RepeatCom = () => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const isLarge = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
            <Box>
                <Box sx={{ padding: isSmall ? '30px' : '70px', backgroundColor: '#02013B', color: '#ffffff' }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: 800, textAlign: 'center' }}>Elevating Team Collaboration through Unified Communication and Intelligent Efficiency </Typography>
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
        </>
    )
}

export default RepeatCom
