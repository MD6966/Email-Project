import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import { Box, Stack, Typography, CircularProgress } from '@mui/material';
import ListContainer from './components/ListContainer/ListContainer';
import ListDataContainer from './components/ListDataContainer/ListDataContainer';
import MainContent from './components/MainContentContainer/MainContent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoldersGoogle } from '../../store/actions/folderActions';

const Dashboard = ({ setprogress }) => {
  const type = useSelector((state) => state.folder.src);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    setprogress(20);
    // if(type === 'Google') {
    //   dispatch(getAllFoldersGoogle()).then((result) => {
    //     console.log(result.data.payload[0])
    //   }).catch((err) => {
    //     console.log(err)
    //   });
    // }
    setTimeout(() => {
      setprogress(100);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <Stack>
          <TopBar />
          <SideBar />
          <Box sx={{ ml: '4%', display: 'flex' }}>
            <ListContainer type={type} />
            {/* <ListDataContainer /> */}
            <MainContent />
          </Box>
        </Stack>
      )}
    </div>
  );
};

export default Dashboard;
