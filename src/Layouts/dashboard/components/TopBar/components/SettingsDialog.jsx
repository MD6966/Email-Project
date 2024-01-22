import React, { useEffect, useState } from 'react';
import { Box, Dialog, DialogContent, Typography, Radio, RadioGroup, FormControlLabel, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, getAllFolders, getAllFoldersGoogle, loginHITSRC, loginSRC, outlookSubsctiption } from '../../../../../store/actions/folderActions';
import { RotatingLines } from 'react-loader-spinner';
import { useLocation } from 'react-router';
import { addAcount } from '../../../../../store/actions/accountActions';
import { getListData, getListDataGoogle } from '../../../../../store/actions/listActions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const SettingsDialog = ({open,close}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [google_data, setGoogle_data] = useState(null)
  const [outlook_data, setOutlook_data] = useState(null)
  const google_data_folder = useSelector((state)=>state.folder.folders_google)
  const outlook_data_folder = useSelector((state)=>state.folder.folders)
  // console.log(google_data_folder.length, "THISSS")
  const [loading, setLoading] = useState(false)
  const loginSrc = useSelector((state)=>state.folder.src)
  const user = useSelector((state)=>state.email.user)
  const dispatch = useDispatch()
  const sweetAlertFunc = () => {
    let timerInterval;
    MySwal.fire({
      title: "Adding Account Please Wait",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Account has been added Successfuly",
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  }
  useEffect(()=> {
    // console.log(google_data_folder[0][2], "+++++")
    if(loginSrc === 'Google') {
      setGoogle_data(google_data_folder[0][2] || '')
    }
    setOutlook_data(outlook_data_folder? outlook_data_folder[0] : '')
  },[google_data_folder, outlook_data_folder])

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionClick = (type) => {
    // console.log(type)
    dispatch(loginHITSRC(type))
    if(type === 'Google') {
      if(user.google_access_token == null) {
    dispatch(loginHITSRC(type))
        window.location.href = import.meta.env.VITE_RIDERECT_URL_GOOGLE;
    }
    else {
        // dispatch(addAcount)
        close()
        setSelectedOption(null)
        dispatch(getAllFoldersGoogle())
        dispatch(getListDataGoogle(google_data?.id || ''))
        sweetAlertFunc()
        // let timerInterval;
        // MySwal.fire({
        //   title: "Adding Account Please Wait",
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: () => {
        //     Swal.showLoading();
        //     const timer = Swal.getPopup().querySelector("b");
        //     timerInterval = setInterval(() => {
        //       timer.textContent = `${Swal.getTimerLeft()}`;
        //     }, 100);
        //   },
        //   willClose: () => {
        //     clearInterval(timerInterval);
        //   }
        // }).then((result) => {
        //   if (result.dismiss === Swal.DismissReason.timer) {
        //     MySwal.fire({
        //       position: "center",
        //       icon: "success",
        //       title: "Account has been added Successfuly",
        //       showConfirmButton: false,
        //       timer: 2000
        //     });
        //   }
        // });
    }
    }
    else if (type === 'Outlook') {
      if(user.outlook_access_token == null) {
        window.location.href = import.meta.env.VITE_RIDERECT_URL;
    }
    else {
      console.log(user)
      close()
      setSelectedOption(null)
      dispatch(getAllFolders())
      // dispatch(outlookSubsctiption())
      dispatch(getListData(outlook_data?.folder_id || ''))
      sweetAlertFunc()

    }
    }
    // if(type=='Outlook') {
    //   window.location.href = import.meta.env.VITE_REDIRECT_URL;
    // }
  }
  // console.log(outlook_data_folder, 'OUTLOOK FOLDER')
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
                <FormControlLabel value="Google" control={<Radio disabled={(loginSrc === 'Google' || google_data_folder.length > 0)} />} label={
                  (loginSrc === 'Google' || google_data_folder.length > 0) ? 
                  "Google (Already Logged In)" :
                  "Google"
                } />
                {selectedOption == 'Google' && renderFields}
                <FormControlLabel value="Icloud" control={<Radio />} label="Icloud" />
                {selectedOption == 'Icloud' && renderFields}
                <FormControlLabel value="Exchange" control={<Radio />} label="Exchange" />
                {selectedOption == 'Exchange' && renderFields}
                <FormControlLabel value="Yahoo" control={<Radio />} label="Yahoo" />
                {selectedOption == 'Yahoo' && renderFields}
                <FormControlLabel value="Outlook" control={<Radio disabled={loginSrc === 'Outlook' || outlook_data_folder.length > 0} />} label={
                  (loginSrc === 'Outlook' || outlook_data_folder.length > 0) ? 
                  "Outlook (Already Logged In)" :
                  "Outlook"
                } />
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
