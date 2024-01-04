import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const DialogLoader = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Please Wait...</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <RotatingLines
              strokeColor="#040263"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogLoader;
