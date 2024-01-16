import React, { useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useSelector } from 'react-redux';
import Pictures from './components/Pictures/Pictures'
import Documents from './components/Documents/Documents'
import Softwares from './components/Softwares/Softwares'
const MyUploads = () => {
  const StyledRoot = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    }
  }));
  const StyledContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  }));
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <StyledRoot>
        <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography sx={{color:'#353B48', mb:2, fontWeight:'bold'}} variant='h4'>My Uploads</Typography>
        <VerifiedIcon sx={{verticalAlign:'bottom', fontSize:'2.5rem', ml:1, color:'#353B48'}} />
        </Box>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
        >
          <Tab label="Pictures" />
          <Tab label="Documents" />
          <Tab label="Softwares" />
        </Tabs>
        {selectedTab === 0 && (
          <StyledContent>
              <Pictures />
          </StyledContent>
        )}
        {selectedTab === 1 && (
          <StyledContent>
              <Documents />
          </StyledContent>
        )}
        {selectedTab === 2 && (
          <StyledContent>
              <Softwares />
          </StyledContent>
        )}
      </StyledRoot>
    </div>
  )
}

export default MyUploads
