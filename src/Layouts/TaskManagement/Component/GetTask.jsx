import { Box, Typography, Collapse, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { getTask } from '../../../store/actions/TaskAction';

const btnColor = {
    color: '#BDB5B5'
};

const GetTask = () => {
    const dispatch = useDispatch()
    const [tasks, setTask] = useState([])
    const [completedTasksOpen, setCompletedTasksOpen] = useState(false);
    const getAllTask = () => {
        dispatch(getTask()).then((res) => {
            // console.log(res.data.tasks, 'hhhhhhh')
            setTask(res.data.tasks)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAllTask()
    }, [])
    const handleCompletedTasksToggle = () => {
        setCompletedTasksOpen(!completedTasksOpen);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'hidden' }}>
            {tasks.map((val, ind) => (
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
                        <StarBorderIcon sx={btnColor} />
                        <DeleteOutlineIcon sx={btnColor} />
                        <button
                            style={{
                                backgroundColor: '#F0EDED',
                                border: 'none',
                                padding: '16px 24px',
                                borderRadius: '10px',
                                fontWeight: 600,
                                fontSize: '14px'
                            }}
                        >
                            Complete
                        </button>
                    </Box>
                </Box>
            ))}


            {/* <Box>
                <IconButton onClick={handleCompletedTasksToggle}>
                    <Typography sx={{ color: 'black', fontWeight: 600 }}>Task Completed</Typography>
                    {completedTasksOpen ? <ExpandMoreIcon /> : <ExpandMoreIcon sx={{ transform: 'rotate(180deg)' }} />}
                </IconButton>
                <Collapse in={completedTasksOpen}>
                    <Box
                        sx={{
                            border: '1px solid #BDB5B5',
                            padding: '5px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', gap: '20px' }}>
                                <SaveAsOutlinedIcon />
                                <Typography>Your task will display here</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: '#BDB5B5' }}>Task:</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <StarBorderIcon sx={btnColor} />
                            <DeleteOutlineIcon sx={btnColor} />
                            <button
                                style={{
                                    backgroundColor: '#F0EDED',
                                    border: 'none',
                                    padding: '16px 24px',
                                    borderRadius: '10px',
                                    fontWeight: 600,
                                    fontSize: "14px"
                                }}
                            >
                                Completed
                            </button>
                        </Box>
                    </Box>
                </Collapse>
            </Box> */}
        </Box>
    );
};

export default GetTask;
