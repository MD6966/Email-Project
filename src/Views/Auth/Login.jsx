import { Close, Group } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../store/actions/emailActions';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const initialValues = {
    email:'',
    password:''
}
const Login = ({ setprogress }) => {
    const navigate = useNavigate()
  const [formValues, SetFormValues] = useState(initialValues)
  const [showPassword, setShowPassword] = useState(false);
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
const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      dispatch(login(formValues)).then((result) => {
        console.log(result)
        setLoading(false)
        navigate('/settings-page')
        // if(result.data.payload.user.outlook_access_token) {
        //     navigate('/dashboard', {state:true})
        // }
        // else {
        // }
        // console.log(result.data.payload.user.outlook_access_token, "LOGIN RESULT")
      }).catch((err) => {
        setLoading(false)
        enqueueSnackbar(err.response.data.message, {
            variant:'error'
        })
      });
    //   dispatch(login(formValues)).then((result) => {
    //     console.log(result, 'LOGIN RESULT')
    //     if(result.data.payload.user.outlook_access_token) {
    //       dispatch(getAllFolders()).then((result) => {
    //           // console.log(result, "GET FOLDERS")
    //           setLoading(false)
    //           SetFormValues(initialValues)
    //       }).catch((err) => {
    //         setLoading(false)
    //           console.log(err)
    //       });
    //     }
    //     else{
    //       setLoading(false)
    //       SetFormValues(initialValues)
    //       setSelectedOption(null)
    //       // alert('NO TOKEN')
    //       close()
    //       window.location.href = import.meta.env.VITE_REDIRECT_URL;
    //     }
    //   }).catch((err) => {
    //       setLoading(false)
    //       console.log(err)
    //   });
  }
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
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  }
  const subText = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '19px',
    marginTop:'5px'
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
            sx={{height:'70%',borderRight:'2px solid #B2B9F5', pr:5}}
            >
                <form onSubmit={handleSubmit}>
                <Typography style={textStyles}>
                Sign in with your email
                </Typography>
                <Typography style={subText}>
                Sign in with your email for instant entry into sparkamis
                powerful collaboration hub. Elevate your communication
                and productivity experience effortlessly.
                </Typography>
                <TextField 
                name='email'
                value={formValues.email}
                onChange={handleChange}
                fullWidth
                style={textFieldStyle}
                required
                type='email'
                placeholder='Write email here'
                sx={{
                    "& fieldset": { border: 'none' },
              }}
              />
      <TextField 
      name='password'
      value={formValues.password}
      onChange={handleChange}
      fullWidth
      style={textFieldStyle}
      required
      type={showPassword ? 'text' : 'password'}
      placeholder='********'
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        "& fieldset": { border: 'none' },
      }}
    />
                <Box style={center} >
                    {
                        loading ?
                        <Typography variant='h6' sx={{mt:1}}>
                            Please Wait...
                        </Typography> :
                            <Button
                            variant='contained'
                            style={btnStyles}
                            type='submit'
                            >Sign In</Button>

                    }
                <i style={{marginTop:'8px'}}><b>Or</b></i>
                <Typography sx={{fontFamily:'inter'}}> Sign in with</Typography>
                <Box sx={{mt:2, display:'flex'}}>
                    <Avatar sx={{mr:1, background:'#d9d9d9',
                    '& img': {
                        width: '22px',
                        height: '26px', 
                    },
                }} src="/google.png"/>
                    <Avatar 
                    src='/fb.png'
                    sx={{mr:1, background:'#d9d9d9',
                    '& img': {
                        width: '15px',
                        height: '30px', 
                      },
                }}/>
                    <Avatar sx={{mr:1, background:'#d9d9d9'}}>
                        S
                    </Avatar>

                </Box>
                </Box>
                        </form>
            </Box>
            <Box flex={1} sx={{pl:4}}>
                <Typography style={textStyles}>Unified Workspace</Typography>
                <Typography style={subText}>
                Experience unparalleled cohesion and efficiency with
                Sparkamis's Unified Workspace, where communication, 
                collaboration, and productivity seamlessly converge
                for teams to thrive. 
                </Typography>
                <Box sx={{px:5, mt:4}}>
                    <Box sx={{p:2, background:'#8D8CD2', borderRadius:'10px', display:'flex', alignItems:'center'}}>
                        <Group sx={{mr:1, color:'#272690'}}/>
                        <Typography sx={{fontWeight:'bold', color:'#272690'}}>
                            <i>Create new workspace</i>
                        </Typography>
                    </Box>
                    <Box style={center}>
                        <Button
                variant='contained'
                style={btnStyles}
                >Sign In</Button>
                </Box>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
