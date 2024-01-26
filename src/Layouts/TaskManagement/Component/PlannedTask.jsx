import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { deleteTask, getTask, taskCompleted, taskFavourite } from '../../../store/actions/TaskAction';
import { confirmAlert } from 'react-confirm-alert';

const PlannedTask = () => {
    const [unFavouriteVisible, setUnfavouriteVisible] = useState(false);
    const dispatch = useDispatch()
    const [task, setAllTask] = useState([])
    const getAllTasks = () => {
        dispatch(getTask()).then((res) => {
            setAllTask(res.data.tasks)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAllTasks()
    }, [])
    const handleDelete = (val) => {
        confirmAlert({
            title: 'Delete?',
            message: `Are you sure to delete ?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        dispatch(deleteTask(val.id)).then((res) => {
                            console.log(val.id, 'kkkkkkkkkkk')
                            // SnackbarContent(res.data.message)
                            getAllTasks()
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

    const handleStarClick = async (taskId) => {
        try {
            // Dispatch the taskFavourite action with the task ID
            await dispatch(taskFavourite(taskId));
            setUnfavouriteVisible(true)
            getAllTasks()
            console.log('Task marked as favorite successfully!');
        } catch (error) {
            console.error('Error marking task as favorite:', error);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', overflow: 'hidden', height: '100%', width: 840 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#BDB5B5', height: '50px', width: '50px', borderRadius: '50%' }}>
                        <AppShortcutIcon />
                    </Box>
                    <Typography sx={{ fontSize: '25px', fontWeight: 600, }}>All Planned Task</Typography>
                </Box>
                {task.map((val, ind) => (
                    <Box
                        key={ind}
                        sx={{
                            border: '1px solid #BDB5B5',
                            padding: '12px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
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

                            <StarBorderIcon sx={{ color: '#BDB5B5' }} onClick={() => handleStarClick(val.id)} />
                            <DeleteOutlineIcon sx={{ color: '#BDB5B5' }} onClick={() => handleDelete(val)} />
                        </Box>
                    </Box>
                ))}

            </Box>
        </>
    )
}

export default PlannedTask