import React from 'react'
import Header from '../Components/Header'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Tab, Tabs, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Purple from './Email/Purple';
import Footer from '../Components/Footer';
const GridItems = [
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
    {
        heading: 'Sparkamis API',
        paragraph: 'View our documentation for the Sparkamis API'
    },
]
const Help = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: '#040255', color: 'white', padding: '160px 50px 70px 50px' }}>
                <Grid container spacing={10}>
                    <Grid item lg={6} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <Typography sx={{ fontSize: '52px', fontWeight: 700 }}>How can We help ?</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 5px' }}>
                                <Box style={{ backgroundColor: '#8C8AE4', borderRadius: '40px', display: 'flex', alignItems: 'center', padding: '5px 20px', width: '80%' }}>
                                    <SearchIcon style={{ marginRight: '5px', color: 'white' }} />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        style={{
                                            border: 'none',
                                            color: 'white',
                                            outline: 'none',
                                            width: '100%',
                                            backgroundColor: 'transparent',
                                            flex: 1,
                                            fontSize: '16px',
                                            padding: '5px',
                                        }}
                                    />

                                </Box>
                                <Button sx={{ backgroundColor: 'white', color: '#040255', borderRadius: '40px', fontWeight: 700, fontSize: '16px', padding: '5px 10px' }}>Search</Button>
                            </Box>
                            <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>Whether you have technical inquiries,support requests, or general questions,we're here to help. Explore our resources, connect with our support team, andlet us guide you through a seamless experience with Sparkamis.</Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={6}>
                        <img src="public/image 358.png" alt="" style={{ height: '60vh', width: '100%', objectFit: 'cover' }} />
                    </Grid>

                </Grid>

            </Box>
            <Box sx={{ padding: '100px 120px' }}>

                <Grid container spacing={10}>
                    {GridItems.map((val, ind) => (
                        <Grid key={ind} item lg={3}>
                            <Box sx={{
                                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                                padding: '10px 12px 50px 12px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>{val.heading}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{val.paragraph}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>
            <Box sx={{ backgroundColor: '#040255', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', color: 'white', padding: '100px 0px', margin: '30px 0px' }}>
                <Box>

                    <Typography sx={{ fontSize: '32px', fontWeight: 800, color: 'white', padding: '20px 0px' }}>Frequently Asked Questions?</Typography>
                </Box>
                <Box >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                    >
                        <Tab
                            value="one"
                            label="General Questions"
                            wrapped
                            sx={{ color: 'white' }}
                        />
                        <Tab value="two" sx={{ color: 'white' }} label="Purchase Related" />
                        <Tab value="three" sx={{ color: 'white' }} label="Installation Related" />
                    </Tabs>
                </Box>
                <Box sx={{ color: 'white', }}>
                    <FormControl variant="outlined" sx={{ m: 1, minWidth: 550 }}>
                        <InputLabel
                            id="demo-simple-select-outlined-label"
                            htmlFor="demo-simple-select-outlined"
                            sx={{ color: 'white' }}
                        >
                            What is the difference between Teams and personal plans?
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChange}
                            label="What is the difference between Teams and personal plans?"
                            input={<OutlinedInput label="What is the difference between Teams and personal plans?" sx={{ color: 'white', borderColor: 'white' }} />}
                            MenuProps={{ sx: { color: 'white' } }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Purple />
            <Footer />

        </>
    )
}

export default Help
