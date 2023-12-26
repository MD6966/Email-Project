import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { Box, Typography, styled, Tab, Tabs } from '@mui/material';
import AllPosts from './components/AllPosts';
import Footer from '../../Components/Footer';
const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(15, 5),
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontFamily: 'Inter',
  fontSize: '100px',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
  textAlign: 'center',
}));

// Custom style for the tabs
const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 700, // Adjust the fontWeight as needed
}));

const Blogs = ({setprogress}) => {
  const [value, setValue] = useState(0);
  useEffect(()=> {
    setprogress(20)
    setTimeout(()=> {
      setprogress(100)

    }, 1000)
}, [])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <StyledRoot>
      <Header />
      <StyledHeading>Latest Post</StyledHeading>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{
          my:5
        }}
      >
        <StyledTab label="All Posts" />
        <StyledTab label="Conversational Email" />
        <StyledTab label="Productivity" />
        <StyledTab label="Sparkamis News" />
        <StyledTab label="Team Collaboration" />
        <StyledTab label="Tips & Tricks" />
      </Tabs>
      {value === 0 && <AllPosts />}
      {value === 1 && <div>Content for Tab 2</div>}
      {value === 2 && <div>Content for Tab 3</div>}
      {value === 3 && <div>Content for Tab 4</div>}
      {value === 4 && <div>Content for Tab 5</div>}
      {value === 5 && <div>Content for Tab 6</div>}
    </StyledRoot>
    <Footer />
    </>
  );
};

export default Blogs;
