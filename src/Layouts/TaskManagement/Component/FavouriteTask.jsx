import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import { useDispatch } from 'react-redux';
import { deleteTask, getFavouriteTask, getunFavourite, taskFavourite } from '../../../store/actions/TaskAction';
import { confirmAlert } from 'react-confirm-alert';
import { enqueueSnackbar } from 'notistack';
// import StarIcon from '@mui/icons-material/Star';
const btnColor = {
    color: '#BDB5B5'
};
const FavouriteTask = () => {
    const dispatch = useDispatch()
    const [favoriteTasks, setFavoriteTasks] = useState({});
    const [favourite, setFavourite] = useState([])
    const getAllFaviurite = () => {
        dispatch(getFavouriteTask()).then((res) => {
            console.log(res)
            setFavourite(res.data.tasks)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAllFaviurite()
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
                            // getAllTask()
                            getAllFaviurite()
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
            getAllFaviurite()
            // console.log('Task marked as unfavourite successfully!');
            // Remove the unfavourited task from the state
            // setFavourite((prevFavourites) => prevFavourites.filter(task => task.id !== taskId));

            enqueueSnackbar('Removed from favourite successfully', { variant: 'success' });
        } catch (error) {
            console.error('Error marking task as unfavourite:', error);
        }
    };


    return (
        <>

            <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', overflow: 'hidden', height: '100%', width: 840 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#BDB5B5', height: '50px', width: '50px', borderRadius: '50%' }}>
                        <StarBorderIcon />
                    </Box>
                    <Typography sx={{ fontSize: '25px', fontWeight: 600, }}>All Favourite Task</Typography>
                </Box>
                {favourite.map((val, ind) => (
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
                                <Typography sx={{ color: '#BDB5B5' }}>Task:</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                            <StarIcon
                                sx={{
                                    color: 'yellow', // Change icon color based on favorite state
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleUnfavourite(val.id)}
                            />


                            <DeleteOutlineIcon sx={btnColor} onClick={() => handleDelete(val)} />
                        </Box>
                    </Box>
                ))}

            </Box>
        </>
    )
}

export default FavouriteTask;