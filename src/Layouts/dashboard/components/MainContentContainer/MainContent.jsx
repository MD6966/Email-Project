import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Editor } from 'primereact/editor';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMail, flagEmail, flagEmailGoogle, getGoogleThreads, getOutlookThreads, markAsRead, markAsReadGoogle, replyMail, replyMailGoogle, snoozeEmail, snoozeEmailGoogle, unFlagEmail, unFlagEmailGoogle } from '../../../../store/actions/mailActions';
import { RotatingLines } from 'react-loader-spinner';
import { useSnackbar } from 'notistack';
import ForwardEmail from './components/ForwardEmail';
import { Close } from '@mui/icons-material';
import FlagIcon from '@mui/icons-material/Flag';
import SkeletonComponent from './components/SkeletonComponent';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import MoveMailDialog from './components/MoveMailDialog';
import { Success } from '../../../../Components/alerts/Success';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NoContent from './components/NoContent';
import Loading from '../../../../Components/loaders/loading';
import Snooze from '@mui/icons-material/Snooze';
const MySwal = withReactContent(Swal)
const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 5),
  width:'60%',
}));

const menuData = [
  { icon: <ReplyIcon />, title: 'Reply' },
  { icon: <DeleteIcon />, title: 'Spam' },
  { icon: <StarBorderIcon />, title: 'Favorite' },
  { icon: <ReplyIcon sx={{ transform: 'scaleX(-1)' }} />, title: 'Forward' },
  { icon: <FlagIcon />, title: 'Flag' },
  { icon: <RemoveCircleOutlineIcon />, title: 'Unflag' },
  {icon: <MarkEmailUnreadIcon />, title:'Mark as unread'},
  { icon: <DriveFileMoveIcon />, title: 'Move' },
  { icon: <Snooze />, title: 'Snooze' },
  { icon: <CallIcon />, title: 'Call' },
  { icon: <VideoCallIcon />, title: 'Video' },
];
const initialValues = {
  reply_email:'',
  ccEmail:'',
  bccEmail:'',
  description:'',
}
const MainContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState('');
  const [editorVisible, setEditorVisible] = useState(false);
  const [open, setOpen] = useState(false)
  const [forwardOpen, setForwardOpen] = useState(false)
  const [formValues, setFormValues] = useState(initialValues)
  const [showCcText, setShowCc] = useState(true);
  const [showBccText, setShowBcc] = useState(true);
  const [loading, setloading]= useState(false)
  const [loadingM, setLoadingM] = useState(false)
  const content = useSelector((state)=>state.folder.content)
  const isLoading = useSelector((state)=>state.folder.isLoading)
  const type = useSelector((state)=>state.folder.src)
  const [moveDialog, setMoveDialg] = useState(false)
  const [threads, setThreads] = useState([])
  const [isFavorite, setIsFavorite] = useState(content.flagStatus === "flagged" ? true : false);
  const [snoozeDialogOpen, setSnoozeDialogOpen] = useState(false);
  const [selectedSnoozeDate, setSelectedSnoozeDate] = useState(null);
  const handleSnoozeDialogOpen = () => {
    setSnoozeDialogOpen(true);
  };
  
  const handleSnoozeDialogClose = () => {
    setSnoozeDialogOpen(false);
  };
  const handleSnoozeSubmit = () => {
    setLoadingM(true)
    const formData = new FormData()
    formData.append('message_id', content.mail_id)
    formData.append('mail_id',content.id )
    formData.append('date', selectedSnoozeDate)
      dispatch(type=== 'Outlook' ? snoozeEmail(formData) : snoozeEmailGoogle(formData)).then((result) => {
        console.log(result)
        setLoadingM(false)
        Success(`Email snoozed at ${selectedSnoozeDate}`)
        setSelectedSnoozeDate(null)
      }).catch((err) => {
        setLoadingM(false)
        console.log(err)
      });
   
  
    handleSnoozeDialogClose();
  };
  // console.log(type, "++++TYPE")
  // console.log((content.isRead === '1' || content.isRead === 'READ'))
  // console.log(content)
  const dispatch = useDispatch()
  const {enqueueSnackbar} = useSnackbar()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReply = () => {
    setEditorVisible(true);
  };

  const handleEditorSubmit = () => {
    setEditorVisible(false);
  };

  const handleDelete = () => {
    setOpen(true)
    const formData = new FormData()
    formData.append('message_id', content?.mail_id || '')
    formData.append("mail_id", content.id)
    dispatch(deleteMail(formData)).then((result) => {
      enqueueSnackbar(result.data.message, {
        variant:'success'
      })
      setOpen(false)
    }).catch((err) => {
      console.log(err)
    });
  }
  const handleChangeFields = (e)=> {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]:value
    })
  }
  const handleCcClick = () => {
    setShowCc(false);
  };
  const handleCloseCC = () => {
    setShowCc(true);
  }
  const handleCloseBCC = () => {
    setShowBcc(true)
  }
  const handleBccClick = () => {
    setShowBcc(false);
  };
  // console.log(content, "This is Content")
  const handleSubmit = (e) => {
    e.preventDefault()
    setloading(true)
    const formData = new FormData()
    formData.append('message_id',content.mail_id)
    formData.append('reply_email', content.sender_email_address)
    if(formValues.bccEmail)
    {
      formData.append('bccEmail', formValues.bccEmail)
    }
    if(formValues.ccEmail)
    {
      formData.append('ccEmail', formValues.ccEmail)
    }
    formData.append('description', text)
    
    dispatch(
      type === 'Outlook' ?
      replyMail(formData) :
      replyMailGoogle(formData)
    ).then((result) => {
      setloading(false)
      enqueueSnackbar(result.data.message, {
        variant:'success'
      })
      setFormValues(initialValues)
      setEditorVisible(false);
      setText('')

    }).catch((err) => {
      setloading(false)
      console.log(err)
    });

  }
  const sweetalertFunc = (title) => {
    MySwal.fire({
      position: "top-center",
      icon: "success",
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }
  const handleMenuItemClick = (data) => {
    // console.log(data, '+++++')
    setIsFavorite(!isFavorite)
    setAnchorEl(null)
    const formData = new FormData()
    formData.append('message_id', content.mail_id)
    formData.append('mail_id',content.id )
    if(data.title === "Snooze") {
      handleSnoozeDialogOpen();

    }

    else if (data.title === "Mark as unread")
    {
      setLoadingM(true)
      if(type === 'Google') {
        const formDataG = new FormData()
        formDataG.append('id',content.id)
        dispatch(markAsReadGoogle(formDataG)).then((result) => {
          setLoadingM(false)
          sweetalertFunc("Email marked as unread Successfully")

        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
        });
      }
      else  {
        dispatch(markAsRead(formData)).then((result) => {
          setLoadingM(false)
          sweetalertFunc("Email marked as unread")
        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
        });
      }
    }
    else if (data.title === 'Flag') {
      setLoadingM(true)
      if(type === 'Google') {
        const formDataG = new FormData()
        formDataG.append('id',content.id)
        dispatch(flagEmailGoogle(formDataG)).then((result) => {
          setLoadingM(false)
          sweetalertFunc("Email flagged Successfully")

        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
        });
      }
      else {
        dispatch(flagEmail(formData)).then((result) => {
          setLoadingM(false)
          Success("Email Flagged Successfully!")
        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
        });
      }
    }
    else if (data.title === 'Unflag') {
      setLoadingM(true)
      if(type === 'Google') {
        const formDataG = new FormData()
        formDataG.append('id',content.id)
        dispatch(unFlagEmailGoogle(formDataG)).then((result) => {
          setLoadingM(false)
          sweetalertFunc("Eamil added to favorites Successfully")
        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
        });
      }
      else {
        dispatch(unFlagEmail(formData)).then((result) => {
          setLoadingM(false)
          sweetalertFunc("Removed from favorites Successfully")
        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
          
        });
      }
    }
    else if (data.title === 'Move') {
      setMoveDialg(true)
    }
  }
  const getMailThreads = () => {
    if(type === 'Google') {
      dispatch(getGoogleThreads(content?.mail_id)).then((result) => {
        setThreads(result.data.payload[0])
      }).catch((err) => {
        console.log(err)
      });
    }
    else if ( type === 'Outlook'){
      dispatch(getOutlookThreads(content?.conversationId)).then((result) => {
        setThreads(result.data.payload)
      }).catch((err) => {
        console.log(err)
      });
    }
  }
  useEffect(()=> {
    getMailThreads()
  }, [content])
  const handleFavoriteClick = (val) => {
    setIsFavorite(!isFavorite);
    const formData = new FormData()
    formData.append('message_id', content.mail_id)
    formData.append('mail_id',content.id )
    if(val === 'FAV') {
        if(type === 'Google') {
          const formDataG = new FormData()
          formDataG.append('id',content.id)
          dispatch(flagEmailGoogle(formDataG)).then((result) => {
            // sweetalertFunc("Email flagged Successfully")
  
          }).catch((err) => {
            setLoadingM(false)
            console.log(err)
          });
        }
        else {
          dispatch(flagEmail(formData)).then((result) => {
            setLoadingM(false)
            // Success("Email Flagged Successfully!")
          }).catch((err) => {
            setLoadingM(false)
            console.log(err)
          });
        }
      
    }
    else if (val === 'UNFAV') {
      if(type === 'Google') {
        const formDataG = new FormData()
        formDataG.append('id',content.id)
        dispatch(unFlagEmailGoogle(formDataG)).then((result) => {
          // sweetalertFunc("Removed from favorites Successfully")
        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
        });
      }
      else {

        dispatch(unFlagEmail(formData)).then((result) => {
          // sweetalertFunc("Removed from favorites Successfully")
        }).catch((err) => {
          setLoadingM(false)
          console.log(err)
          
        });
      }
    }
  };
  return (
    <StyledRoot>
      {
        ( isLoading) ?
        <SkeletonComponent />
       :
       (!content) ?
       <NoContent /> : 
       threads.map((val)=> {
        return(
          <Box sx={{mb:2}}>
      <Box
        sx={{
          width: '50vw',
          maxHeight: '90vh',
          border: '1px solid rgba(0,0,0,0.2)',
          borderRadius: '15px',
          overflow: 'hidden',
          overflowY:'scroll'
          
        }}
      >
        <Box
          sx={{
            background: '#e2e2e2',
            height: '10vh',
            p: 1,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt={content?.sender_name || ''} sx={{ background: '#040263', height: '35px', width: '35px', p: 2, fontSize: '16px' }} src="/img"/>
                
              <Box sx={{ ml: 1 }}>
                <Typography sx={{ fontSize: '13px', mb: -0.5 }}>{content?.sender_name || ''} to you</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>{content?.subject || ''}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems:'center' }}>
              <ReplyIcon sx={{ mr: 2 }} />
              <DeleteIcon sx={{ mr: 2, cursor:'pointer' }} onClick={handleDelete}/>
              <ReplyIcon sx={{ mr: 1, transform: 'scaleX(-1)', cursor:'pointer' }}
              onClick={()=>setForwardOpen(true)}
              />
              {/* {
                (content.flagStatus === "notFlagged" ) &&
              <Tooltip title="Add to favorite">
              <FavoriteBorderIcon 
              onClick={()=>handleMenuItemClick({title:'Flag'})}
              sx={{ mr: 2, cursor:'pointer'}} 
              />
              </Tooltip>
              } */}
              {/* {
                (content.flagStatus === "flagged") &&
              <Tooltip title="Remove from favorite">
              <FavoriteIcon sx={{ mr: 2, cursor:'pointer', color:'#040263'}}
              onClick={()=>handleMenuItemClick({title:'Unflag'})}
              
              />
              </Tooltip>
              } */}
               <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
              <IconButton >
                {isFavorite ? <FavoriteIcon sx={{color:'#040263'}} onClick={()=>handleFavoriteClick('UNFAV')} /> : <FavoriteBorderIcon onClick={()=>handleFavoriteClick('FAV')}/>}
              </IconButton>
            </Tooltip>
              <MoreHorizIcon sx={{ mr: 2, cursor: 'pointer',  }} onClick={handleClick} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: '#fff',
            height: '85%',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            mt: -1.5,
            p: 5,
          }}
        >

          <div
          style={{minHeight:'80%', marginBottom:5}}
        dangerouslySetInnerHTML={{ __html: content?.description || '' }}
      />
      {/* <Box sx={{ml:'-100%'}}>
       <Timeline>
        {
          threads.map((val)=> {
            console.log(val)
            const dateObject = new Date(val.date)
            const formattedDate = dateObject.toLocaleDateString('en-US', {
              weekday: 'short',
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            });
            return(
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <strong>
          {val.from}
          </strong> 
          <p>
          {formattedDate}
          </p>
          </div>
          <br />
<div
          style={{minHeight:'80%', marginBottom:5}}
        dangerouslySetInnerHTML={{ __html: content?.description || '' }}
      />
        </TimelineContent>
      </TimelineItem>
            )
          })
        }
    </Timeline>
      </Box> */}
          {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontWeight="bold">Hey Syed!</Typography>
            <Typography color="#777">4:42 pm</Typography>
          </Box>
          <Box sx={{ mt: 2, height: editorVisible ? '40%' : '80%' }}>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries,
            </Typography>
          </Box> */}
          {editorVisible && (
            <Card sx={{mt:4}}>
              <form onSubmit={handleSubmit}>
              {/* <TextField label="To" variant='standard' fullWidth
              name='reply_email'
              value={formValues.reply_email}
              onChange={handleChangeFields}
              required
              sx={{mb:2}} 
               InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showCcText &&
                    <Typography sx={{cursor:'pointer', '&:hover':{textDecoration:'underline'}}}
                    onClick={handleCcClick}
                    >
                      Cc/ 
                    </Typography>
                    }
                    {
                      showBccText &&
                    <Typography sx={{cursor:'pointer', '&:hover':{textDecoration:'underline'}}}
                    onClick={handleBccClick}
                    
                    >
                      Bcc 
                    </Typography>
                    }
                  </InputAdornment>
                ),
              }}
              />
              {
                !showCcText &&
              <TextField label="Cc Email" fullWidth variant='standard' sx={{mb:2}}
              name='ccEmail'
              value={formValues.ccEmail}
              onChange={handleChangeFields}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleCloseCC}>
                      <Close />
                    </IconButton>
                  </InputAdornment>
                ),
              }} 
              />
              }
              {
                !showBccText &&
                <TextField label="Bcc Email" fullWidth variant='standard' sx={{mb:2}}
                name='bccEmail'
                value={formValues.bccEmail}
                onChange={handleChangeFields}

                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleCloseBCC}>
                        <Close />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
              } */}
              <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px', }}/>
              {
                loading ? 
                <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={loading} 
                /> :
                <Box sx={{mb:2, ml:1}}>
              <Button variant="outlined" sx={{ mr: 2, mt:2 }} onClick={()=>setEditorVisible(false)}>
                cancel
              </Button>
              <Button variant="outlined" type='submit' sx={{ mt: 2 }}>
              Submit
            </Button>
                </Box>
              }
              </form>
            </Card>
          )}
          {!editorVisible && (
            <Box sx={{mt:4}}>
              <Button
                variant="outlined"
                sx={{ mr: 2 }}
                startIcon={<ReplyIcon />}
                onClick={handleReply}
              >
                Reply
              </Button>
              <Button
                variant="outlined"
                endIcon={<ReplyIcon sx={{ transform: 'scaleX(-1)' }} />}
                onClick={()=>setForwardOpen(true)}

              >
                Forward
              </Button>
            </Box>
          )}
        </Box>
      </Box>
          </Box>
        )
       })
      }
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
            width: 320,
            height: 220,
            padding: 10,
            marginTop: '15px',
            marginLeft: '-10px',
            borderRadius: '15px',
          },
        }}
      >
      <Grid container spacing={2}>
            {
                menuData.map((val, ind)=> {
                    return(
                        <>
                        <Grid item xs={3} md={3} lg={3}>
                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', cursor:'pointer'}} onClick={
                      ()=>handleMenuItemClick(val)
                    }>
                        {val.icon}
                        <Typography>{val.title}</Typography>
                    </Box>
                    </Grid>
                        </>

                    )
                })
            }
       </Grid>
      </Menu>
      <Loading title="Deleting Please Wait" open={open} />
       {
        loadingM &&
      <Loading open={true} styleeee={{ style: { backgroundColor: 'transparent', boxShadow: 'none'  } }} title="Please Wait"/>
              }
       <ForwardEmail 
       open={forwardOpen}
       close={()=>setForwardOpen(false)}
       id={content?.mail_id || ''}
       type={type}
       />
       <MoveMailDialog 
       open={moveDialog}
       close={()=>setMoveDialg(false)}
       id={content?.id || ''}
       type={type}
       
       />
      <Dialog open={snoozeDialogOpen} onClose={handleSnoozeDialogClose}>
      <DialogTitle>Select Snooze Date</DialogTitle>
      <DialogContent>
      <TextField
      type="datetime-local"
      label="Snooze Until"
      value={selectedSnoozeDate}
      onChange={(e) => setSelectedSnoozeDate(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: new Date().toISOString().split("T")[0],
      }}
    />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSnoozeDialogClose}>Cancel</Button>
        <Button onClick={handleSnoozeSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
    </StyledRoot>
  );
};

export default MainContent;
