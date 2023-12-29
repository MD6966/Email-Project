import React, { useState } from 'react';
import { Box, Dialog, DialogContent, Typography, Radio, RadioGroup, FormControlLabel, TextField, Button } from '@mui/material';

const SettingsDialog = () => {
  const [selectedOption, setSelectedOption] = useState(null);
const [showFields, setShowFields] = useState(false)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const renderFields = (
        <div>
          <Typography variant='h6' fontWeight="bold">{selectedOption}</Typography>
          <TextField label="Email" fullWidth size="small" sx={{my:1}} />
          <TextField label="Password" fullWidth type="password" size='small' />
          <Button variant='contained' sx={{mt:1}} size='small'>
            Submit
          </Button>
        </div>
  )
  return (
    <div>
      <Dialog open={true} fullWidth maxWidth="md">
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
