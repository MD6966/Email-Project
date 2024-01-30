import { Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { buttonStyles, labelList, listContainer } from './styles'
import { Add, Chat, Edit, History, Label, MarkChatUnread, MoreVert, Star, } from '@mui/icons-material'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import SnoozeIcon from '@mui/icons-material/Snooze';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import CategoryIcon from '@mui/icons-material/Category';
import ErrorIcon from '@mui/icons-material/Error';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ComposePopup from './components/ComposePopup';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { useDispatch, useSelector } from 'react-redux';
import { getListData, getListDataGoogle, loadingFalse, setList } from '../../../../store/actions/listActions';
import { Resetcontent, authenticate, authenticateGoogle, deleteFolder, folderName, getAllFolders, getAllFoldersGoogle, outlookSubsctiption, resetLoading } from '../../../../store/actions/folderActions';
import G_L_Dialog from './components/G_L_Dialog';
import { getAllGroups } from '../../../../store/actions/outlookGroupActions';
import DialogLoader from './components/DialogLoader';
import ListDataContainer from '../ListDataContainer/ListDataContainer';
import { useNavigate } from 'react-router';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Success } from '../../../../Components/alerts/Success';
const ListContainer = () => {
  const data = useSelector((state)=>state.folder)
  const type = useSelector((state)=>state.folder.src)
  const data_google = useSelector((state)=>state.folder.folders_google)
  const hit_src = useSelector((state)=>state.folder.hit_src)
  const sourceValue = localStorage.getItem('soruce');
  const current_state = useSelector((state)=>state.folder.current_state)
  // console.log(current_state)
  // console.log(sourceValue)
  // console.log(hit_src, "HIT SRC")
  // console.log(data_google, "GOOGLE FOLDERS")
  const [selectedItem, setSelectedItem] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [openG, setOpenG] = React.useState(false);
  const [composeOpen, setComposeOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dTitle, setDtitle] = useState('')
  const [listData, setListData] = useState([])
  const [group, setGroup] = useState(false)
  const [label, setLabel] = useState(false)
  const [groupData, setGroupData] = useState([])
  const [lableData, setLabelData] = useState([])
  const [selectedGroup, setSelectedGroup] = useState([])
  const [selectedLabel, setSelectedLabel] = useState([])
  const [name, setName] = useState('')
  const [groups, setGroups] = useState([])
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [folderVal, setFolderVal] = useState('')
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event, val) => {
    setFolderVal(val)
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
    confirmAlert({
      title: "Delete?",
      message: "Are you sure to want to delete folder ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const formData = new FormData()
            formData.append('delete_as', type==='Outlook' ? 'outlook' : 'google')
            formData.append('folder_id',folderVal.id)
            dispatch(deleteFolder(formData)).then((result) => {
              dispatch(getAllFoldersGoogle())
              Success('Folder Deleted!')
            }).catch((err) => {
              console.log(err)
            });
            // dispatch(logout());
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUrl = new URL(window.location.href);
  const codeParam = currentUrl.searchParams.get('code');
  // console.log(type, "TYPE")
  const groupsData = () => {
    dispatch(getAllGroups()).then((result) => {
      setGroups(result.data.payload)
      // console.log(result.data.payload)
    }).catch((err) => {
      console.log(err)
    });
  }
  useEffect(()=> {
    if(type === 'Outlook') {
      groupsData()
    }
  }, [])
  const handleComposeClick = () => {
    setComposeOpen(true);
  };

  const handleComposeClose = () => {
    setComposeOpen(false);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setGroup(false)
    setGroupData([])
    setSelectedGroup([])
    dispatch(Resetcontent())
    if(type==='Outlook') {
      dispatch(folderName(item.folder_name))
    }
    // dispatch(getListData(item.folder_id))
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickG = () => {
    setOpenG(!openG);
  };
  useEffect(() => {
    if(type === 'Outlook' && current_state === 'Outlook') {
      if(group) {
        setSelectedItem(null)
        dispatch(loadingFalse())
      }
      else 
      if (data.folders.length > 0) {
        setSelectedItem(data.folders[4]); 
      }
      
    } else if (type === 'Google' && current_state === 'Google') {
      if(group) {
        setSelectedItem(null)
      }
      else
      if(data_google.length > 0) {
        setSelectedItem(data_google[0][2] || '')
      }
    }
  }, [data.folders, data_google, current_state, group]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);
  const handleClickM = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialogOpen = (title, name) => {
    setDtitle(title)
    setName(name)
    setDialogOpen(true)
    
  }
  const handleCloseDialog =()=> {
    setDialogOpen(false)
    setDtitle('')
    setName('')
  }
  const topRef = useRef(null);
  const hnadleGroupBtn = (val, data) => {
    dispatch(setList(val))
    dispatch(loadingFalse())
    setSelectedGroup(data)
    setGroupData(data)
    setGroup(true)
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const handleLableBtn = (val) => {
    dispatch(setList(val))
    setLabel(true)
    setSelectedGroup([])
  }
  useLayoutEffect(()=> {
    if(type==='Outlook' && current_state ==='Outlook') {
      dispatch(getListData(selectedItem?.folder_id)).then((result) => {
        setListData(result.data.payload)
      }).catch((err) => {
        console.log(err)
      });
      dispatch(resetLoading())
    }
    else if (type === 'Google' && current_state === 'Google') {
      dispatch(getListDataGoogle(selectedItem?.folder_id)).then((result) => {
        // console.log(result.data.payload[0], 'RESULT GOOGLE')
        setListData(result.data.payload[0])
      }).catch((err) => {
        console.log(err)
      });
      dispatch(resetLoading())
    }
  },[selectedItem])
  useLayoutEffect(()=> {
    if(type === 'Outlook') {
      dispatch(getAllFolders())
    }
    else if (type === 'Google') {
      dispatch(getAllFoldersGoogle())
    }
  },[])
  useEffect(()=> {
    if (sourceValue === 'Outlook') {
      if (codeParam) {
        const formData = new FormData()
        formData.append('code', codeParam)
        dispatch(authenticate(formData)).then((result) => {
          console.log('AUTH RESULT', result)
          dispatch(getAllFolders()).then((result) => {
            dispatch(outlookSubsctiption())
            console.log(result, "RESULT AFTER AUTH")
            navigate('/dashboard', { replace: true });
        }).catch((err) => {
            console.log(err)
        });
        }).catch((err) => {
          console.log(err);
        });
      } else {
        console.log('Code parameter is not present in the URL');
      }
    }
    else if (sourceValue === 'Google') {
      if (codeParam) {
        const formData = new FormData()
        formData.append('code', codeParam)
        dispatch(authenticateGoogle(formData)).then((result) => {
          console.log('AUTH RESULT OF GOOGLE', result)
          dispatch(getAllFoldersGoogle()).then((result) => {
  
            console.log(result, "RESULT AFTER AUTH")
            navigate('/dashboard', { replace: true });
        }).catch((err) => {
            console.log(err)
        });
        }).catch((err) => {
          console.log(err);
        });
      } else {
        console.log('Code parameter is not present in the URL');
      }
    }
    // console.log(type, 'TYPE FROM USEEFFECT')
  }, [])
  // useEffect(() => {
  //   if (codeParam) {
  //     const formData = new FormData()
  //     formData.append('code', codeParam)
  //     dispatch(authenticate(formData)).then((result) => {
  //       console.log('AUTH RESULT', result)
  //       dispatch(getAllFolders()).then((result) => {

  //         console.log(result, "RESULT AFTER AUTH")
  //         navigate('/dashboard', { replace: true });
  //     }).catch((err) => {
  //         console.log(err)
  //     });
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //   } else {
  //     console.log('Code parameter is not present in the URL');
  //   }
  // }, [codeParam]); 
  // console.log(selectedItem, "Selected")
  // console.log(listData, "LISTDATA")
  return (
    <>
    <Box sx={listContainer} ref={topRef}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={buttonStyles}
          variant='contained'
          startIcon={<Edit />}
          onClick={handleComposeClick}
        >
          Compose
        </Button>
        {composeOpen && 
        
        <ComposePopup open={composeOpen} onClose={handleComposeClose} type={type}/>
        }
      </Box>
      <Box sx={{ mt: 2 }}>
        <List>
        {
  type === 'Outlook' && data.folders.length > 0 && current_state == 'Outlook' ? (
    data.folders.map((val, ind) => (
      <ListItem
        key={ind}
        disablePadding
        onClick={() => handleItemClick(val)}
        sx={{
          backgroundColor: selectedItem?.folder_name === val?.folder_name ? '#B5DCFF' : 'transparent' || '',
          height: '35px',
          cursor: 'pointer',
          px: 1,
          '&:hover': {
            backgroundColor: selectedItem?.folder_name === val?.folder_name ? '#B5DCFF' : 'rgba(0, 0, 0, 0.04)' || '',
          },
        }}
      >
        <ListItemIcon>
          {val.folder_name === 'Archive' ? (
            <ArchiveIcon />
          ) : val.folder_name === 'Conversation History' ? (
            <History />
          ) : val.folder_name === 'Deleted Items' ? (
            <DeleteIcon />
          ) : val.folder_name === 'Drafts' ? (
            <DraftsIcon />
          ) : val.folder_name === 'Inbox' ? (
            <AllInboxIcon />
          ) : val.folder_name === 'Junk Email' ? (
            <DeleteSweepIcon />
          ) : val.folder_name === 'Outbox' ? (
            <SendIcon />
          ) : val.folder_name === 'Sent Items' ? (
            <MarkChatReadIcon />
          ) : val.folder_name === 'Snoozed' ? (
            <SnoozeIcon />
          ) : <Label />}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              {val.folder_name}
            </Typography>
          }
        />
      </ListItem>
    ))
  ) : type === 'Google' && data_google != 'undefined' && data_google?.length > 0 && current_state == 'Google' ? (
    data_google[0].map((val, ind) => (
      <>
      <ListItem
        key={ind}
        disablePadding
        onClick={() => handleItemClick(val)}
        sx={{
          backgroundColor: selectedItem?.name === val?.name ? '#B5DCFF' : 'transparent' || '',
          height: '35px',
          cursor: 'pointer',
          px: 1,
          '&:hover': {
            backgroundColor: selectedItem?.name === val?.name ? '#B5DCFF' : 'rgba(0, 0, 0, 0.04)' || '',
          },
        }}
      >
        {/* {console.log(val , '++++++')} */}
        <ListItemIcon>
          {val.name === 'CHAT' ? (
            <Chat />
          ) : val.name === 'SENT' ? (
            <SendIcon />
          ) : val.name === 'INBOX' ? (
            <AllInboxIcon />
          ) : val.name === 'IMPORTANT' ? (
            <FolderSpecialIcon />
          ) : val.name === 'TRASH' ? (
            <DeleteSweepIcon />
          ) : val.name === 'DRAFT' ? (
            <DraftsIcon />
          ) : val.name === 'SPAM' ? (
            <ErrorIcon />
          ) : val.name === 'STARRED' ? (
            <Star />
          ) : val.name === 'UNREAD' ? (
            <MarkChatUnread />
          ) : <CategoryIcon />}
        </ListItemIcon>
        <ListItemText
          primary={
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              {val.name}
            </Typography>
              {val.status === '0' &&
              <IconButton onClick={(e)=>handleClick2(e,val)}>
                <MoreVert />
              </IconButton>
              }
            </Box>
          }
        />
      </ListItem>
      </>
    ))
  ) : (
    'No Data'
  )
}

        </List>
        <Button size='small' variant='outlined' sx={{my:1}} fullWidth
        onClick={()=>handleDialogOpen('Label', 'label' )}
        startIcon={
          <Add />
        }
        >
          Add Folder
        </Button>
        {
          type === 'Outlook' && (
        <>
        {/* <Box sx={{mt:2}}>
          <List>
          <ListItemButton onClick={handleClick}
          sx={{
            height:'35px',
            background:open ? '#B5DCFF' : 'none',
            '&:hover': {
              backgroundColor: '#B5DCFF',
            }
          }}
          >
        <ListItemText primary="Label" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, height:'35px' }}
          onClick={()=>handleLableBtn('Label')}
          >
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText primary={
              <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography sx={{ml:-3}}>
                Mudasser
                </Typography>
                <Add sx={{fontSize:'15px', ml:3}}
                onClick={
                  handleClickM
                }
                />
              </Box>
            } />
          </ListItemButton>
        </List>
      </Collapse>
          </List>
        </Box> */}
        <Box>
          <List>
          <ListItemButton onClick={handleClickG}
          sx={{
            height:'35px',
            background:openG ? '#B5DCFF' : 'none',
            '&:hover': {
              backgroundColor: '#B5DCFF',
            }
          }}
          >
        <ListItemText primary="Groups" />
        {openG ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openG} timeout="auto" unmountOnExit>
        <Button size='small' variant='outlined' sx={{my:1}} fullWidth
         onClick={()=>handleDialogOpen('Group', 'group' )}
        startIcon={
          <Add />
        }
        >
          Add Group
        </Button>
        <List component="div" disablePadding>
            {
              groups[0]?.map((val)=> {
                // console.log(val)
                return(
                  <>
                  <ListItemButton
                  onClick={()=>hnadleGroupBtn('Group', val)}
                  sx={{
                    backgroundColor: selectedGroup?.name === val?.name ? '#B5DCFF' : 'transparent' || '',
                    pl: 4, height:'35px' ,
                    '&:hover': {
                      backgroundColor: selectedGroup?.name === val?.name ? '#B5DCFF' : 'rgba(0, 0, 0, 0.04)' || '',
                    },
                  }}
                
                  >
                  <ListItemIcon>
                    <LabelIcon />
                  </ListItemIcon>
                  <ListItemText primary={
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Typography sx={{ ml: -3 }}>
                        {val.name.length > 8 ? val.name.slice(0, 8) + '...' : val.name}
                      </Typography>
                      <Add sx={{fontSize:'15px', ml:3}}
                      onClick={
                        handleClickM
                      }
                      />
                    </Box>
                  } />
                  
                  </ListItemButton>
                  </>
                )
              })
            }
        </List>
      </Collapse>
          </List>
        </Box>
        </>
          )
        }
        {/* <Box sx={{ mt: 2 }}>
          <div>{selectedItem.content}</div>
        </Box> */}
      </Box>
    </Box>
    <G_L_Dialog 
    open={dialogOpen}
    close={handleCloseDialog}
    name={dTitle}
    group={groupsData}
    type={type}
    />
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openM}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <DialogLoader />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose2}>Delete</MenuItem>
        
      </Menu>
      <ListDataContainer 
      data={listData}
      type={type}
      group={group}
      groupData={groupData}
      memberSuccess={groupsData}
      />

    </>
  );
}

export default ListContainer;
