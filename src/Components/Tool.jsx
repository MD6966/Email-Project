
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
const CoreSec = [
    {

        title: 'User Verification',
        description: 'Users contribute by verifying and validating banking codes based on personal experiences for a collective effort in maintaining accuracy.'
    },
    {

        title: 'Community Ratings',
        description: 'Implement a rating system for users to provide feedback on the reliability of banking codes, fostering transparency and trust.'
    },

    {
        title: 'Verification Badges',
        description: 'Recognize active contributors with badges enhancing credibility and gamifying the verification process.'
    },
    {
        title: 'Comments and Explanations',
        description: 'Enable users to leave comments providing context or additional information about specificbanking codes.'
    },
    {
        title: 'Real-time Updates',
        description: 'Provide real-time updates on the verification status of banking codes to ensure users have the latest information'
    },
    {
        title: 'Moderation System',
        description: 'Implement a moderation system for quality control, preventing misinformationand maintaining credibility.'
    },
    {

        title: 'Engagement Rewards',
        description: 'Introduce rewards for active participants,encouraging community engagement and recognition.'
    },
    {

        title: 'Verification History',
        description: 'Allow users to view the verification history of banking codes, promoting transparency and accountability.'
    },


];
const Tool = () => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const isLarge = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
            <Box sx={{ padding: '100px 30px' }}>
                <Grid container spacing={isSmall ? 5 : 10}>
                    {CoreSec.map((item, index) => (
                        <Grid item lg={4} md={6} xs={12} sm={12} key={index} textAlign={'center'}>
                            <Box sx={{ backgroundColor: '#02013B', color: 'white', padding: '25px', marginTop: isSmall ? '20px' : 'none', height: '180px', width: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', margin: '0 auto', boxShadow: '0 0 8px rgb(#000)' }}>
                                {/* <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{item.title}</Typography> */}
                                <Typography sx={{ fontSize: '16px', fontWeight: 400, }}>{item.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Tool
