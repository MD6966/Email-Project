import { Box, Typography } from '@mui/material'
import React from 'react'
import { iconStyles, listDataContainer, textStlyes } from './styles'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
const ListDataContainer = () => {
    const listData = [
        { title: 'React Js Developer', desc: 'Required React Js developer at Saeedan Technology.com', time: '2:48 pm' },
        { title: 'Frontend Engineer', desc: 'Exciting opportunity for a Frontend Engineer at ABC Corporation', time: '10:15 am' },
        { title: 'Full Stack Developer', desc: 'Join our team as a Full Stack Developer with experience in MERN stack', time: '4:30 pm' },
      ];
  return (
    <Box sx={listDataContainer}>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography style={textStlyes}>
                Inbox
            </Typography>
            <Box>
                <ContentCopyIcon sx={iconStyles} />
                <FilterListIcon sx={iconStyles}/>
            </Box>
        </Box>
        <Box sx={{mt:2}}>
            <Typography style={textStlyes} >
                Today
            </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {listData.map((val)=> {
                return(
                    <>
      <ListItem alignItems="flex-start" sx={{cursor:'pointer',
        '&:hover' : {
            background:'#e2e2e2'
        }
    }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box>

        <ListItemText
          primary={
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography>
            {val.title}
            </Typography>
            <Typography sx={{fontSize:'12px'}}>
                {val.time} 
            </Typography>
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
          </>
                )
            })}
     
    </List>
        </Box>
    </Box>
  )
}

export default ListDataContainer
