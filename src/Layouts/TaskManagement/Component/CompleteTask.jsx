import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GradingIcon from '@mui/icons-material/Grading';
import { useDispatch } from 'react-redux';
import { deleteTask, getTaskCompleted, taskFavourite } from '../../../store/actions/TaskAction';
import { confirmAlert } from 'react-confirm-alert';
import { enqueueSnackbar } from 'notistack';

const btnColor = {
    color: '#BDB5B5'
}
const CompleteTask = () => {
    const dispatch = useDispatch()
    const [complete, setComplete] = useState([])
    const getAlComplete = () => {
        dispatch(getTaskCompleted()).then((res) => {
            setComplete(res.data.tasks)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAlComplete()
    }, [])

    const handleDelete = async (val) => {
        try {
            await confirmAlert({
                title: 'Delete?',
                message: `Are you sure to delete?`,
                buttons: [
                    {
                        label: 'Yes',
                        onClick: async () => {
                            await dispatch(deleteTask(val.id));
                            enqueueSnackbar('Task Deleted Successfully', { variant: 'success' });
                            getAlComplete()
                            console.log(val.id, 'kkkkkkkkkkk');
                            // SnackbarContent(res.data.message)
                            // getAllTask()
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
        } catch (error) {
            console.error(error);
        }
    };

    // const handleStarClick = async (taskId) => {
    //     try {
    //         // Dispatch the taskFavourite action with the task ID
    //         await dispatch(taskFavourite(taskId));
    //         console.log('Task marked as favorite successfully!');
    //     } catch (error) {
    //         console.error('Error marking task as favorite:', error);
    //     }
    // };

    return (
        <>

            <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', overflow: 'hidden', height: '100%', width: 840 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#BDB5B5', height: '50px', width: '50px', borderRadius: '50%' }}>
                        <GradingIcon />
                    </Box>
                    <Typography sx={{ fontSize: '25px', fontWeight: 600, }}>All Completed Task</Typography>
                </Box>
                <Box>

                    {complete.map((val, ind) => (
                        <Box
                            key={ind}
                            sx={{
                                border: '1px solid #BDB5B5',
                                padding: '5px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: 2
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
                                {/* <StarBorderIcon sx={btnColor} onClick={() => handleStarClick(val.id)} /> */}
                                <DeleteOutlineIcon sx={btnColor} onClick={() => handleDelete(val)} />
                                <button
                                    style={{
                                        backgroundColor: 'green',
                                        border: 'none',
                                        padding: '18px 20px',
                                        borderRadius: '10px',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        color: 'white'

                                    }}
                                >
                                    Completed
                                </button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>


        </>
    )
}

export default CompleteTask