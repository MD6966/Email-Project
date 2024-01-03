import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forwardMail } from '../../../../../store/actions/mailActions'
import { useSnackbar } from 'notistack'
import { RotatingLines } from 'react-loader-spinner'

const ForwardEmail = ({open, close, id}) => {
    const [email, setEmail] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('message_id', id)
        formData.append('email', email)
        dispatch(forwardMail(formData)).then((result) => {
            setLoading(false)
            enqueueSnackbar(result.data.message, {
                variant:'success'
            })
            setEmail('')
            close()
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
    <div>
        <Dialog open={open} onClose={close} fullWidth>
            <form onSubmit={handleSubmit}>
            <DialogContent>
                <TextField
                fullWidth 
                label="Enter Email"
                onChange={(e)=>setEmail(e.target.value)}
                required
                type='email'
                />
            </DialogContent>
            <DialogActions>
                {
                    loading ?
                <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={loading}
                sx={{mr:4}} 
                /> 
                :
                <Button variant='contained' type='submit'>
                    Send
                </Button>
                }
            </DialogActions>
                </form>
        </Dialog>
    </div>
  )
}

export default ForwardEmail
