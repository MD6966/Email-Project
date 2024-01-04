import { Box, FormControlLabel, Radio, RadioGroup, Typography, Button, Card, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SettingsPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false)
  const currentUrl = new URL(window.location.href);
  const codeParam = currentUrl.searchParams.get('code');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionClick = (type) => {
    if(type=='Outlook') {
      window.location.href = import.meta.env.VITE_REDIRECT_URL;
    }
  }
  useEffect(() => {
    if (codeParam) {
      const formData = new FormData()
      formData.append('code', codeParam)
      dispatch(authenticate(formData)).then((result) => {
        dispatch(getAllFolders()).then((result) => {
          setLoading(false)
          close()
          setSelectedOption(null)
          SetFormValues(initialValues)
          navigate('/dashboard', { replace: true });
      }).catch((err) => {
          console.log(err)
      });
      }).catch((err) => {
        setLoading(false)
        console.log(err);
      });
    } else {
      console.log('Code parameter is not present in the URL');
    }
  }, [codeParam]);
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
