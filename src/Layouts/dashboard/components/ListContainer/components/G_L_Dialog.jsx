import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../../../../store/actions/outlookGroupActions'
import { useSnackbar } from 'notistack'
import { RotatingLines } from 'react-loader-spinner'

const G_L_Dialog = ({open,close,name, group}) => {
    const initialValues = {
        name:'',
        description:''
    }
    const [formValues, SetFormValues] = useState(initialValues)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleChange = (e) => {
        const {name, value} = e.target
        SetFormValues({
            ...formValues,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(createGroup(formValues)).then((result) => {
            setLoading(false)
            alert(result.data.message)
            group()
            close()
            SetFormValues(initialValues)
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <div>
      <Dialog open={open} fullWidth onClose={close}>
        <form onSubmit={handleSubmit}>
        <DialogTitle>
          New {name}
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2} sx={{mt:2}}>
                <Grid item xs={12} lg={12}>
          <TextField size='small' label={`Enter new ${name} name`} fullWidth
          name='name'
          value={formValues.name}
          onChange={handleChange}
          required
          />
                </Grid>
                <Grid item xs={12} lg={12}>
          <TextField size='small' label={`Enter description`} fullWidth
          name='description'
          value={formValues.description}
          onChange={handleChange}
          required
          />
                </Grid>
            </Grid>

        </DialogContent>
        <DialogActions>
          <Button variant='outlined'>
            Cancel
          </Button>
          <Button variant={loading? 'disabled' : 'contained'} type='submit'>
            {
                loading ? 
                <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={loading} 
                /> :
                'Create'

            }
          </Button>
        </DialogActions>
        </form>
    </Dialog>
    </div>
  )
}

export default G_L_Dialog
