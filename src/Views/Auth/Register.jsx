import { Close, Group } from '@mui/icons-material';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Register = ({ setprogress }) => {
    const navigate = useNavigate()
  useEffect(() => {
    setprogress(20);
    setTimeout(() => {
      setprogress(100);
    }, 1000);
  }, []);

  const containerStyle = {
    backgroundImage: 'url("/register-bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  };
  const boxStyles = {
    width:'65vw',
    height:'90vh',
    background:'#040263',
    borderRadius:'40px',
    overflow:'hidden',
    color:'#fff',
    padding:'25px'
  }
  const headingStyles = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 900,
    lineHeight: 'normal',
    textAlign:'center'
  }
  const textStyles = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '44px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    textAlign:'center'
  }
  const subText = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '19px',
    marginTop:'5px',
    width:'50%'
  }
  const textFieldStyle = {
    backgroundColor: "#8D8CD2",
    borderRadius:'12px',
    marginTop:'12px'
  }
  const center = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10px',
    flexDirection:'column'
  }
  const btnStyles = {
    background:'#fff',
    color: '#040263',
    fontFamily: 'Inter',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    marginTop:'20px',
    height:'50px',
    width:'150px'
  }
  const handleClick = () => {
    navigate('/')
  }
  return (
    <Box style={containerStyle}>
      <Box style={boxStyles}>
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Close sx={{fontSize:'30px', cursor:'pointer'}}
            onClick={handleClick}
            />
        </Box>
        <Typography style={headingStyles}>
        Welcome to Sparkamis 👋
        </Typography>
        <Box sx={{display:'flex', mt:5, height:'100%',}}>
            <Box flex={1}
            sx={{height:'70%', px:5, mt:2}}
            >
                <Typography sx={{mb:2}} style={textStyles}>
                Register
                </Typography>
               
                <TextField 
                fullWidth
               style={textFieldStyle}
               label="Name"
               placeholder='Write full name here'
               sx={{
                mb:2,
                "& fieldset": { border: 'none' },
              }}
              InputLabelProps={{
                style: {color:'#fff'},
              }}
                />
                <TextField 
                fullWidth
               style={textFieldStyle}
               label="Email"
               placeholder='Write email here'
               sx={{
                mb:2,
                "& fieldset": { border: 'none' },
              }}
              InputLabelProps={{
                style: {color:'#fff'},
              }}
                />
                 <TextField 
                fullWidth
                label="password"
               style={textFieldStyle}
               placeholder='********'
               sx={{
                "& fieldset": { border: 'none' },
              }}
              InputLabelProps={{
                style: {color:'#fff'},
              }}
                />
                <Box style={center} >
                <Button
                variant='contained'
                style={btnStyles}
                >Sign In</Button>
                
                
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
