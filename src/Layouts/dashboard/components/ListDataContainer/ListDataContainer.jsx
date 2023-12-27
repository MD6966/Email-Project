import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {listDataContainer} from './styles'
const ListDataContainer = () => {
  const listData = [
    { title: 'React Js Developer', desc: 'Required React Js developer at Saeedan Technology.com', time: '2:48 pm' },
    { title: 'Frontend Engineer', desc: 'Exciting opportunity for a Frontend Engineer at ABC Corporation', time: '10:15 am' },
    { title: 'Full Stack Developer', desc: 'Join our team as a Full Stack Developer with experience in MERN stack', time: '4:30 pm' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseDown = (index) => {
    const timeoutId = setTimeout(() => {
      setSelectedItem(index);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  const handleMouseUp = () => {
    setSelectedItem(null);
  };

  const isSelected = (index) => {
    return selectedItem === index;
  };

  return (
    <Box sx={listDataContainer}>
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
    </Box>
  );
};

export default ListDataContainer;
