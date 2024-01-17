import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getAllFolders } from '../../../../../store/actions/folderActions';
import { movemail } from '../../../../../store/actions/mailActions';
import { Success } from '../../../../../Components/alerts/Success';
const MoveMailDialog = ({open, close, id, type}) => {
    // console.log(id)
    const [age, setAge] = React.useState('');
    const [loading, setLoading] = useState(false)
    const [folders, setFolders] = useState([])
    const dispatch = useDispatch()
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    useEffect(()=> {
    dispatch(getAllFolders()).then((result) => {
        setFolders(result.data.payload)
    }).catch((err) => {
        console.log(err)
    });
    }, [])
    const handleMoveMail = () => {
        setLoading(true)
        const formData = new FormData()
        formData.append('folder_id', age)
        formData.append('id', id)
        formData.append('move_as', type==='Outlook' ? 'outlook' : 'google')
        dispatch(movemail(formData)).then((result) => {
            setLoading(false)
            close()
            Success('Mail moved!')
            setAge('')
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <Dialog open={open} onClose={close} fullWidth>
        <DialogTitle>
            Select folder
            <Typography sx={{color:'#888'}}>
                Please select folder below in which you want to move mail
            </Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            {
                folders.map((val, ind)=> {
                    return(
                        <MenuItem value={val.folder_id}>{val.folder_name}</MenuItem>

                    )
                })
            }
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
            {
                loading ?
                "Please wait..." :
            <Button variant='contained' onClick={handleMoveMail}>
                Move
            </Button>
            }
        </DialogActions>
    </Dialog>
  )
}

export default MoveMailDialog
