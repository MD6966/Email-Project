import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskIcon from '@mui/icons-material/Task';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, CircularProgress, Menu, MenuItem, Typography } from '@mui/material';
import moment from 'moment';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { deleteTask, getTask, getunFavourite, taskCompleted, taskFavourite, taskPost } from '../../../store/actions/TaskAction';
import GetTask from './GetTask';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { confirmAlert } from 'react-confirm-alert';
import { useSnackbar } from 'notistack';
import StarIcon from '@mui/icons-material/Star';

const btnStyle = {
  color: '#BDB5B5'
};

const AddTask = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [accordionVisible, setAccordionVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [completeVisible, setCompleteVisible] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [loading, setLoading] = useState(false);
  const [taskLoading, setTaskLoading] = useState(false);
  const [loadingGetTask, setLoadingGetTask] = useState(false);
  const [favoriteTasks, setFavoriteTasks] = useState({});
  const [localFavoriteTasks, setLocalFavoriteTasks] = useState({});
  const handleCompletedTasksToggle = () => {
    setCompletedTasksOpen(!completedTasksOpen);
  };
  const handlebtn = () => {
    setAccordionVisible(!accordionVisible);
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalender = () => {
    setAnchorEl(null);
    setShowCalendar(true);
    setSelectedTime(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowCalendar(false);
  };

  const handleMenuItemClick = (time) => {
    setSelectedTime(time);
    handleClose();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleAddTask = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append('title', taskText);
      formData.append('duedate', moment(selectedDate).format('h:mm'));

      if (selectedTime !== null) {
        formData.append('snooze', selectedTime.toString());
      }

      await dispatch(taskPost(formData));
      getAllTask();
      setAccordionVisible(false);
      setSelectedDate(new Date());
      setSelectedTime(null);
      setTaskText('');

      // Show a snackbar upon successful task addition
      enqueueSnackbar('Task Added Successfully', { variant: 'success' });

    } catch (error) {
      console.error('Error adding task:', error);
      enqueueSnackbar('Please select Time and Date', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };
  const [tasks, setTask] = useState([])
  const getAllTask = async () => {
    try {
      setLoadingGetTask(true);
      const res = await dispatch(getTask());
      setTask(res.data.tasks);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingGetTask(false);
    }
  }
  useEffect(() => {
    // console.log("Fetching tasks...");
    getAllTask();
  }, []);
  const handleDelete = (val) => {
    confirmAlert({
      title: 'Delete?',
      message: `Are you sure to delete ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(deleteTask(val.id)).then((res) => {
              // console.log(val.id, 'kkkkkkkkkkk')
              enqueueSnackbar('Task deleted successfully', { variant: 'success' });

              getAllTask()
            }).catch((err) => {
              console.error(err);
            });

          }
        },
        {
          label: 'No',
        }

      ]
    })


  }

  const handleUnfavourite = async (taskId) => {
    try {
      await dispatch(getunFavourite(taskId));
      getAllTask()
      console.log('Task marked as favorite successfully!');
    } catch (error) {
      console.error('Error marking task as favorite:', error);
    }
  };
  const handleStarClick = async (taskId) => {
    try {
      if (favoriteTasks[taskId]) {
        await handleUnfavourite(taskId);
        setCompleteVisible(false)
        getAllTask()
        enqueueSnackbar('Remove from favourite successfully', { variant: 'success' });
      } else {
        await dispatch(taskFavourite(taskId));
        getAllTask()
        enqueueSnackbar('Added to favourite successfully', { variant: 'success' });
      }
      setFavoriteTasks((prevState) => ({ ...prevState, [taskId]: !prevState[taskId] }));
    } catch (error) {
      console.error('Error handling favorite:', error);
    }
  };

  const handleComplete = async (taskId) => {
    try {
      setTaskLoading((prevState) => ({ ...prevState, [taskId]: true }));

      await dispatch(taskCompleted(taskId));
      setCompleteVisible(false);
      getAllTask()
      enqueueSnackbar('Task Completed Successfully', { variant: 'success' });
      getAllTask();
    } catch (error) {
      console.error('Error marking task as complete:', error);
    } finally {
      setTaskLoading((prevState) => ({ ...prevState, [taskId]: false }));
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', overflow: 'hidden', width: '100%' }}>
        <Box flex={1} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#BDB5B5', height: '50px', width: '50px', borderRadius: '50%' }}>
            <TaskIcon />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>Create Tasks</Typography>
            <Typography sx={{ fontSize: '16x', color: '#BDB5B5' }}>{moment().format('MMMM Do,z')}</Typography>
          </Box>
        </Box>
        <Box flex={3} sx={{ width: '100%', overflow: 'hidden' }}>
          <button
            style={{ width: 840, backgroundColor: 'white', border: '1px solid #BDB5B5', padding: '12px', textAlign: 'start', cursor: 'pointer', borderRadius: '10px' }}
            onClick={handlebtn}
          >
            <span style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <AddIcon />
              <Typography>Add a Task</Typography>
            </span>
          </button>

          {accordionVisible && (
            <Box sx={{ mt: '20px' }}>
              <Box sx={{
                border: '1px solid #BDB5B5',
                borderRadius: '10px',
                padding: '5px'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <Box>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                      <Box>
                        <SaveAsOutlinedIcon sx={{ mt: 1 }} />
                      </Box>
                      <Box>
                        <input
                          placeholder='Write your task here'
                          style={{
                            border: 'none',
                            outline: 'none',
                            padding: '12px',
                            borderRadius: '10px',
                            '&:focus': {
                              backgroundColor: '#BDB5B5',
                            },
                          }}
                          value={taskText}
                          onChange={(e) => setTaskText(e.target.value)}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: "20px" }}>
                    <CalendarMonthOutlinedIcon sx={btnStyle} onClick={handleCalender} overflow={'hidden'} />
                    <PaletteOutlinedIcon sx={btnStyle} />
                    <AddAlertOutlinedIcon sx={btnStyle} onClick={handleButtonClick} />
                    <button
                      disabled={loading}
                      style={{
                        backgroundColor: '#F0EDED',
                        border: 'none',
                        padding: '12px 20px',
                        fontWeight: 600,
                        borderRadius: '10px',
                        cursor: 'pointer',
                      }}
                      onClick={handleAddTask}
                    >
                      {loading && <CircularProgress size={12} style={{ marginRight: '8px' }} />}
                      Add
                    </button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick('Monday')}>Monday</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Tuesday')}>Tuesday</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Wednesday')}>Wednesday</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Thursday')}>Thursday</MenuItem>
          </Menu>

          {showCalendar && (
            <Box
              sx={{
                marginTop: '10px',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                marginLeft: '450px'
              }}
            >
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  overflow: 'hidden',
                  width: '100%',
                }}
              />
            </Box>
          )}

        </Box>
        {/* <GetTask /> */}
      </Box>
      <Box sx={{ mt: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'hidden' }}>
        {completeVisible || (loadingGetTask ? (
          <CircularProgress size={40} sx={{ margin: '0 auto' }} />
        ) : (
          tasks.map((val, ind) => (
            <Box
              key={ind}
              sx={{
                border: '1px solid #BDB5B5',
                padding: '5px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              {console.log(val, 'value')}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                  <SaveAsOutlinedIcon />
                  <Typography>{val.title}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: '#BDB5B5' }}>Task:{val.duedate} {val.snooze}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <StarIcon
                    sx={{
                      color: val.favorite === 1 ? 'yellow' : 'black',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStarClick(val.id)}
                  />
                {/* {favoriteTasks[val.id] ? (
                  <StarIcon
                    sx={{
                      color: 'yellow',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStarClick(val.id)}
                  />
                ) : (
                  <StarBorderIcon
                    sx={{
                      color: val.favorite === '1' ? 'yellow' : 'black',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStarClick(val.id)}
                  />
                )} */}
                <DeleteOutlineIcon sx={btnStyle} onClick={() => handleDelete(val)} />
                <button
                  disabled={loading}
                  onClick={() => handleComplete(val.id)}
                  style={{
                    backgroundColor: '#F0EDED',
                    border: 'none',
                    padding: '16px 24px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  {taskLoading[val.id] && <CircularProgress size={12} style={{ marginRight: '8px' }} />}
                  Complete
                </button>
              </Box>
            </Box>
          ))
        ))}
      </Box >
    </>
  );
};

export default AddTask;
