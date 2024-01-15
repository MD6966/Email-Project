import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import { AddCircle, Edit, Group, MoreHoriz, Send, StarOutlineOutlined } from '@mui/icons-material';
import IosShareIcon from '@mui/icons-material/IosShare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { icon } from '../../styles';
import AddMember from './components/AddMember';
import GroupMembers from './components/GroupMembers';
const listData = [
    { title: 'React Js Developer', desc: 'Required React Js developer at Saeedan Technology.com', time: '2:48 pm' },
    { title: 'Frontend Engineer', desc: 'Exciting opportunity for a Frontend Engineer at ABC Corporation', time: '10:15 am' },
    { title: 'Full Stack Developer', desc: 'Join our team as a Full Stack Developer with experience in MERN stack', time: '4:30 pm' },
  ];
  const listItemData = [
    {icon:<Edit />, title:'Edit Group'},
    {icon:<AddCircle />, title:'Add Member'},
    {icon:<Group />, title:'Members'},
    {icon: <LogoutIcon />, title:'Leave Group'},

  ]
const Groups = ({groupData, memberSuccess}) => {
  console.log(groupData, "This is Group Data")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [dialog, setDialog] = useState(false)
    const [memberDialog, setMemberDialg] = useState(false)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDialogOpen = () => {
      setDialog(true)
      setAnchorEl(null);
    }
    const handleMemberDialogOpen = () => {
      setMemberDialg(true)
      setAnchorEl(null);
    }
  return (
    <Box>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mb:2}}>
           <Typography variant='h6' fontWeight="bold">
            Groups
           </Typography>
          <Box sx={{display:'flex', justifyContent:'flex-end'}}>
          <ContentCopyIcon style={{ fontSize: '24px', marginRight: '10px' }} />
          <FilterListIcon style={{ fontSize: '24px' }} />
        </Box>
      </Box>
        <Box sx={{display:'flex'}}>
            <Avatar>
                S
            </Avatar>
            <Box sx={{ml:1, display:'flex'}}>
                <Box>
            <Typography fontWeight="bold" sx={{mt:0.5, fontSize:'18px'}}>
                {groupData.name} 
            </Typography>
            <Typography sx={{fontSize:'12px', mt:-0.5, color:'#777'}}>{groupData?.outlook_contacts?.length + 1} members</Typography>
                </Box>
                <StarOutlineOutlined sx={{mt:0.5, ml:2}}/>
            </Box>
        </Box>
        <Box sx={{ml:2, mt:1, display:'flex', alignItems:'center'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <Send style={icon} />
            <Typography
            sx={{
                fontSize:'11px',
                ml:-2,
                mr:2
            }}
            >Sent Emails</Typography>
            </Box>
            <IosShareIcon style={icon}/>
            <CalendarMonthIcon style={icon}/>
            <SettingsIcon style={icon}/>
            <MoreHoriz style={icon}
            cursor="pointer"
            onClick={handleClick}
            />
        </Box>
        <Divider sx={{my:2}} />
        <Typography fontWeight="bold">
            Inbox
        </Typography>
        <Divider sx={{my:2}} />
        <Box sx={{ mt: 2 }}>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {listData.map((val, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                      background: '#e2e2e2'
                    },
                    background:'inherit',
                }}
               
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
                        
                          <Typography sx={{ fontSize: '12px' }}>
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
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
            listItemData.map((data)=> {
                return(
                    <MenuItem onClick={
                      data.title === 'Add Member' ?
                      handleDialogOpen : 
                      data.title === 'Members' ?
                      handleMemberDialogOpen :
                      handleClose
                    } sx={{height:'30px'}}>
                         <ListItemIcon>{data.icon}</ListItemIcon>
                        {data.title}</MenuItem>
                )
            })
        }
      </Menu>
      <GroupMembers title={groupData.name} open={memberDialog} close={()=>setMemberDialg(false)} data={groupData} addM={()=>setDialog(true)} />
      <AddMember open={dialog} close={()=>setDialog(false)} data={groupData} memberSuccess={memberSuccess}/>
    </Box>
  )
}

export default Groups
