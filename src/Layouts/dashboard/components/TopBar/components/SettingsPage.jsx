import { Box, FormControlLabel, Radio, RadioGroup, Typography, Button, Card, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { current_State, loginHITSRC, loginSRC, outlookSubsctiption } from '../../../../../store/actions/folderActions';

const SettingsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const currentUrl = new URL(window.location.href);
  const codeParam = currentUrl.searchParams.get('code');
  const user = useSelector((state)=>state.email.user)
  const dispatch = useDispatch()
  // console.log(user, 'This is User')
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionClick = (type) => {
    dispatch(loginSRC(type))
    dispatch(loginHITSRC(type))
    dispatch(current_State(type))
    if(type=='Outlook') {
        if(user.outlook_access_token == null) {
            window.location.href = import.meta.env.VITE_REDIRECT_URL;
        }
        else {
          if(user.outlook_subscription_id == null) {
            dispatch(outlookSubsctiption())
          }
            navigate('/dashboard')
        }
    }
    else if(type=="Google") {
        if(user.google_access_token == null) {
            window.location.href = import.meta.env.VITE_RIDERECT_URL_GOOGLE;
        }
        else {
            navigate('/dashboard')
        }
        
    }
  }
//   useEffect(() => {
//     if (codeParam) {
//       const formData = new FormData()
//       formData.append('code', codeParam)
//       dispatch(authenticate(formData)).then((result) => {
//         dispatch(getAllFolders()).then((result) => {
//           setLoading(false)
//           close()
//           setSelectedOption(null)
//           SetFormValues(initialValues)
//           navigate('/dashboard', { replace: true });
//       }).catch((err) => {
//           console.log(err)
//       });
//       }).catch((err) => {
//         setLoading(false)
//         console.log(err);
//       });
//     } else {
//       console.log('Code parameter is not present in the URL FROM SETTINGS',);
//     }
//   }, [codeParam]);
  const renderFields = (
    <div>
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

      <Button variant='contained' sx={{mt:1}} size='small'
      onClick={()=>handleOptionClick(selectedOption)}
      >
        Sign In with {selectedOption}
      </Button>
      }
      
    </div>
)
  return (
    <Box sx={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
       <Card sx={{px: 2}} elevation={4}>
        <CardContent>

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
                  </CardContent>
            </Card> 
    </Box>
  )
}

export default SettingsPage
