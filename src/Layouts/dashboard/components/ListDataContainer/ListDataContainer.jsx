import { Box, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {listDataContainer} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import Groups from './components/Groups/Groups';
import { content, resetLoading } from '../../../../store/actions/folderActions';
import { RotatingLines } from 'react-loader-spinner';
import { markAsRead, markAsReadGoogle } from '../../../../store/actions/mailActions';
import Labels from './components/Labels/Labels';
const ListDataContainer = ({data, type, group, groupData, memberSuccess, label}) => {
  // console.log(data, "DATA FROM CONTAINER")
  const [selectedItem, setSelectedItem] = useState(0);
  const [list_data , setList_data] = useState("")
  const l_data = 
  type === 'Outlook' ?
  useSelector((state)=>state.folder.folderData):
  useSelector((state)=>state.folder.folderDataG)
  // console.log(l_data, "YYYYYY")
  const isLoading = useSelector((state)=>state.folder.isLoading)
  const folder_name = useSelector((state)=>state.folder.folder_name)
  const [selectedContent, setSelectedContent] = useState('')
  const dispatch = useDispatch()
  const isSelected = (index) => {
    return selectedItem === index;
  };
  useLayoutEffect(()=> {
    if (type === 'Outlook') {
      // console.log(l_data, 'THIS IS L_DATA')
      setList_data(l_data)
    }
    if (type=='Google'){
      setList_data(l_data)
    }
  }, [l_data])
  // console.log(list_data, 'HELLOOOOOOO')
  useEffect(() => {
    if (list_data && !selectedContent) {
      setSelectedContent(list_data[0]);
    }
  }, [list_data, selectedContent, data]);
  // console.log(selectedContent, "++++____+++++")
  useEffect(()=> {
    dispatch(content(selectedContent))
  }, [selectedContent, list_data ])
  useLayoutEffect(()=> {
    setSelectedItem(0)
  }, [list_data])
  const formatTime = (dateTimeString) => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(dateTimeString).toLocaleTimeString([], options);
  };
  const handleContent = (content, index) => {
    setSelectedItem(index)
    setSelectedContent(content)
    if(type === 'Outlook') {
      const formData = new FormData()
      formData.append('message_id', content.mail_id)
      formData.append('mail_id',content.id )
      dispatch(markAsRead(formData)).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
    }
    else {
      const formDataG = new FormData()
      formDataG.append('id', content.id)
      dispatch(markAsReadGoogle(formDataG))
    }
  }
  
  // console.log(list_data[0])
  return (
    <Box sx={listDataContainer}>
      {/* {list_type === 'Inbox' ?
      <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Inbox
        </Typography>
        <Box>
          <ContentCopyIcon style={{ fontSize: '24px', marginRight: '10px' }} />
          <FilterListIcon style={{ fontSize: '24px' }} />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography style={{ fontSize: '14px' }}>
          Today
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {listData.map((val, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    background: isSelected(index) ? '#e2e2e2' : 'inherit',
                  },
                  background: isSelected(index) ? '#e2e2e2' : 'inherit',
                }}
                onMouseDown={() => handleMouseDown(index)}
                onMouseUp={handleMouseUp}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <Box>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography>
                          {val.title}
                        </Typography>
                        {isSelected(index) ? (
                          <>
                            <DeleteIcon style={{ fontSize: '20px', marginRight: '-45px' }} />
                            <ArchiveIcon style={{ fontSize: '20px' }} />
                          </>
                        ) : (
                          <Typography sx={{ fontSize: '12px' }}>
                            {val.time}
                          </Typography>
                        )}
                      </Box>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {val.desc}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </Box>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box> 
      </> 
      :
      list_type === 'Group' ?
      <Groups /> :
      null
      
    } */}
    <>
      {
        !group ?
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {folder_name ?
          folder_name:
          <Skeleton variant='text' width={50} />  
        }
        </Typography>
        <Box>
          <ContentCopyIcon style={{ fontSize: '24px', marginRight: '10px' }} />
          <FilterListIcon style={{ fontSize: '24px' }} />
        </Box>
      </Box> : null
      }
      <Box sx={{ mt: 2 }}>
        {/* <Typography style={{ fontSize: '14px' }}>
          Today
        </Typography> */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
            (isLoading) ? 
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={isLoading} 
                /> 
                <Typography  sx={{ml:1, fontWeight:'bold'}}>Please wait</Typography>
                </Box>
            : 
            list_data[0] && 
            list_data[0].length < 1 && !group ?
            <Typography sx={{textAlign:'center', mt:3}}>No Messages Found</Typography> :
              group ? 
              <Groups groupData={groupData} memberSuccess={memberSuccess} /> :
              label ? 
              <Labels /> :
          data.map((val, index) => {
            // console.log(val, 'INSIDE')
            return(
              <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    background: isSelected(index) ? '#e2e2e2' : 'inherit',
                  },
                  background: isSelected(index) ? '#e2e2e2' : 'inherit',
                }}
                onClick={()=>handleContent(val, index)}
              >
                {/* {console.log(val.description, "This is")} */}
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <Box>
                <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ minWidth: 0, flexGrow: 1, fontWeight:val.isRead == '0' ? 'bold' : 'null'  }}>
                      {type === 'Outlook' && val.sender_name ? val.sender_name : ''}
                      {type === 'Google' && val.from ? val.from : ''}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Typography sx={{ fontSize: '11px', textAlign: 'right', fontWeight:val.isRead == '0' ? 'bold' : 'null' }}>
                        {
                        type === 'Outlook' &&
                        formatTime(val.createdDateTime || '')}
                        {
                        type === 'Google' &&
                        formatTime(val.date || '')}
                      </Typography>
                    </Box>
                  </Box>
                }
  secondary={
    <React.Fragment>
      <Typography
  sx={{ display: 'inline' }}
  component="span"
  variant="body2"
  color="text.primary"
/>
    </React.Fragment>
  }
/>
                </Box>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
            )
          })}
        </List>
      </Box> 
      </> 
    </Box>
  );
};

export default ListDataContainer;
