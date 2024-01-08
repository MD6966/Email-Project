import React, { useEffect } from 'react'
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
import { Box, Stack, Typography } from '@mui/material'
import ListContainer from './components/ListContainer/ListContainer'
import ListDataContainer from './components/ListDataContainer/ListDataContainer'
import MainContent from './components/MainContentContainer/MainContent'
import { useSelector } from 'react-redux'

const Dashboard = ({setprogress}) => {
  const type=useSelector((state)=>state.folder.src)
  console.log(type)
    useEffect(()=> {
        setprogress(20)
        setTimeout(()=> {
          setprogress(100)
        }, 1000)
    }, [])
  return (
    <div style={{overflow:'hidden'}}>
      <Stack>
        <TopBar />
        <SideBar />
        <Box sx={{ml:'4%', display:'flex'}}>
          <ListContainer />
          {/* <ListDataContainer /> */}
          <MainContent />
        </Box>
      </Stack>
    </div>
  )
}

export default Dashboard
