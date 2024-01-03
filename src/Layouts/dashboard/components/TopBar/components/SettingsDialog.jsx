import React, { useState } from 'react';
import { Box, Dialog, DialogContent, Typography, Radio, RadioGroup, FormControlLabel, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../../../../store/actions/emailActions';
import { authenticate, getAllFolders } from '../../../../../store/actions/folderActions';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router';
const initialValues = {
    email:'',
    password:''
}
const SettingsDialog = ({open,close}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false)
  const [formValues, SetFormValues] = useState(initialValues)
  const currentUrl = new URL(window.location.href);
  const codeParam = currentUrl.searchParams.get('code');
  const dispatch = useDispatch()
  if (codeParam) {
    const formData = new FormData()
    formData.append('code', codeParam)
    dispatch(authenticate(formData)).then((result) => {
      console.log(result)
    }).catch((err) => {
    console.log(err)    
    });

  } else {
    console.log('Code parameter is not present in the URL');
  }
const handleChange = (e) => {
    const {name, value} = e.target
    SetFormValues({
        ...formValues,
        [name]:value
    })
}
const handleSubmit = (e) => {
  setLoading(true)
    e.preventDefault()
    dispatch(login(formValues)).then((result) => {
      console.log(result, 'LOGIN RESULT')
      if(result.data.payload.user.outlook_access_token) {
        dispatch(getAllFolders()).then((result) => {
            // console.log(result, "GET FOLDERS")
            setLoading(false)
            close()
            setSelectedOption(null)
            SetFormValues(initialValues)
        }).catch((err) => {
            console.log(err)
        });
      }
      else{
        setLoading(false)
        SetFormValues(initialValues)
        setSelectedOption(null)
        // alert('NO TOKEN')
        close()
        window.location.href = import.meta.env.VITE_REDIRECT_URL;
      }
    }).catch((err) => {
        setLoading(false)
        console.log(err)
    });
}
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const renderFields = (
        <div>
          <Typography variant='h6' fontWeight="bold">{selectedOption}</Typography>
          <form onSubmit={handleSubmit}>
          <TextField label="Email" fullWidth size="small" sx={{my:1}} 
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
          />
          <TextField label="Password" fullWidth type="password" size='small' 
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
          />
          {
            loading ? 
            <RotatingLines
                strokeColor="#040263"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={loading} 
                />
            :

          <Button variant='contained' sx={{mt:1}} size='small' type='submit'>
            Submit
          </Button>
          }
          </form>
        </div>
  )
  return (
    <div>
      <Dialog open={open} fullWidth maxWidth="md" onClose={close}>
        <DialogContent>
          <Box sx={{ display: 'flex', height: '60vh' }}>
            <Box sx={{ width: '30%', borderRight: '1px solid rgba(0,0,0,0.3)' }}>
              <Typography variant='h6' fontWeight="bold">Settings</Typography>
            </Box>
            <Box sx={{ width: '70%', px: 2 }}>
              <Typography variant='h6' fontWeight="bold">Accessibility</Typography>
              <Typography sx={{ mt: 2 }}>Select Option you want to use</Typography>

              <RadioGroup
                aria-label="accessibility-options"
                name="accessibility-options"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <FormControlLabel value="Google" control={<Radio />} label="Google" />
                {selectedOption == 'Google' && renderFields}
                <FormControlLabel value="Icloud" control={<Radio />} label="Icloud" />
                {selectedOption == 'Icloud' && renderFields}
                <FormControlLabel value="Exchange" control={<Radio />} label="Exchange" />
                {selectedOption == 'Exchange' && renderFields}
                <FormControlLabel value="Yahoo" control={<Radio />} label="Yahoo" />
                {selectedOption == 'Yahoo' && renderFields}
                <FormControlLabel value="Outlook" control={<Radio />} label="Outlook" />
                {selectedOption == 'Outlook' && renderFields}
                <FormControlLabel value="Imap-pop" control={<Radio />} label="Imap-pop" />
                {selectedOption == 'Imap-pop' && renderFields}

              </RadioGroup>

             
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SettingsDialog;
