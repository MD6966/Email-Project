import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Divider, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import InstagramIcon from '@mui/icons-material/Instagram';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Footer = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ backgroundColor: '#02013B', color: 'white' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '20px', padding: '30px', }}>
                {/* Always show this box */}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: isLargeScreen ? 'start' : 'center' }}>
                    {/* <img style={{ height: '90px', width: '90px', }} src="Logo.png" alt="abc" /> */}
                    <Typography sx={{ fontSize: '30px' }}>Logo</Typography>
                    <Typography sx={{ fontSize: '14px', display: 'flex', gap: '10px', alignItems: 'center', }}>
                        <LocalPhoneIcon sx={{ fontSize: '18px' }} />
                        03153936205
                    </Typography>
                    <Typography sx={{ fontSize: '14px', display: 'flex', gap: '10px', }}>
                        <AttachEmailIcon sx={{ fontSize: '18px', color: 'black' }} />
                        devbymoaz@gmail.com
                    </Typography>
                    <Typography>11921 Freedom Drive
                        Two Fountain <br /> Square, Suite 560,
                        Reston, VA 20190
                        USA</Typography>
                    <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'cemter', }}>
                        <LinkedInIcon sx={{ color: 'white' }} />
                        <FacebookIcon sx={{ color: 'white' }} />
                        <SubscriptionsIcon sx={{ color: 'white' }} />
                        <InstagramIcon sx={{ color: 'white' }} />
                    </Box>
                </Box>

                {/* Show these boxes only on lg screens and up */}
                {isLargeScreen && (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>NEXT-GEN SERVICES</Typography>
                            <Typography>Data Science & AI</Typography>
                            <Typography>Cyber Security</Typography>
                            <Typography>Blockchain</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>ADVISORY</Typography>
                            <Typography>Digital Transformation</Typography>
                            <Typography>Product Strategy</Typography>
                            <Typography>Discovery Workshop Services</Typography>
                            <Typography>POC Development</Typography>
                            <Typography>Business Process</Typography>
                            <Typography>Outsourcing</Typography>
                            <Typography>Process Consulting & Audit</Typography>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>NEXT-GEN SERVICES</Typography>
                            <Typography>Digital Transformation</Typography>
                            <Typography>Product Strategy</Typography>
                            <Typography>Discovery Workshop Services</Typography>
                            <Typography>POC Development</Typography>
                            <Typography>Business Process</Typography>


                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>NEXT-GEN SERVICES</Typography>
                            <Typography>Digital Transformation</Typography>
                            <Typography>Product Strategy</Typography>
                            <Typography>Discovery Workshop Services</Typography>
                            <Typography>POC Development</Typography>
                            <Typography>Business Process</Typography>
                            <Typography>Outsourcing</Typography>


                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>NEXT-GEN SERVICES</Typography>
                            <Typography>Digital Transformation</Typography>
                            <Typography>Product Strategy</Typography>
                            <Typography>Discovery Workshop Services</Typography>
                            <Typography>POC Development</Typography>


                        </Box>

                    </>
                )}
            </Box>

            <Divider sx={{ margin: '0px 100px', color: 'white' }} />

            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMedium || isSmall ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '30px',
                    gap: '20px'
                }}
            >
                <Box>
                    <Typography variant="body2">@ 2023 | All rights reserved</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        gap: isSmall ? '10px' : '20px',
                        // marginTop: isSmall ? '10px' : '20px',
                        flexWrap: isMedium || isSmall ? 'wrap' : 'nowrap',

                    }}
                >
                    <Typography variant="body2">Testimonials</Typography>
                    <FiberManualRecordIcon sx={{ fontSize: '10px' }} />
                    <Typography variant="body2">Start Ups</Typography>
                    <FiberManualRecordIcon sx={{ fontSize: '10px' }} />
                    <Typography variant="body2">Press Kit</Typography>
                    <FiberManualRecordIcon sx={{ fontSize: '10px' }} />
                    <Typography variant="body2">Privacy Policy</Typography>
                    <FiberManualRecordIcon sx={{ fontSize: '10px' }} />
                    <Typography variant="body2">Terms of Use</Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default Footer;
