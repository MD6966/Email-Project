import { Close, Group } from '@mui/icons-material';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from '../../store/actions/emailActions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { RotatingLines } from 'react-loader-spinner';
const initialValues = {
  name:'',
  email:'',
  password:''
}
const MySwal = withReactContent(Swal)
const Register = ({ setprogress }) => {
  const [formValues, setFormValues] = useState(initialValues)
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
  useEffect(() => {
    setprogress(20);
    setTimeout(() => {
      setprogress(100);
    }, 1000);
  }, []);
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]:value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('name',formValues.name)
    formData.append('email', formValues.email)
    formData.append('password', formValues.password)
    dispatch(register(formData)).then((result) => {
      setLoading(false)
      setFormValues(initialValues)
      MySwal.fire({
        position: "top-center",
        icon: "success",
        title: result.data.message,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/login', {replace:true})
      // console.log(result.data.message)
    }).catch((err) => {
      setLoading(false)
      console.log(err)
    });
    // console.log(formValues)
  }
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
        <form onSubmit={handleSubmit}>
        <Box sx={{display:'flex', mt:5, height:'100%',}}>
            <Box flex={1}
            sx={{height:'70%', px:5, mt:2}}
            >
                <Typography sx={{mb:2}} style={textStyles}>
                Register
                </Typography>
               
                <TextField
                required 
                name="name"
                value={formValues.name}
                onChange={handleChange}
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
              inputProps={{
                style: { color: '#fff' }, 
              }}
                />
                <TextField
                required 
                name="email"
                value={formValues.email}
                onChange={handleChange}
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
              inputProps={{
                style: { color: '#fff' }, 
              }}
                />
                 <TextField
                 required 
                 name="password"
                 value={formValues.password}
                 onChange={handleChange}
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
              inputProps={{
                style: { color: '#fff' }, 
              }}
                />
                <Box style={center} >
                  {
                    loading ?
                    <RotatingLines
                    strokeColor="#fff"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                  />
                  :
                <Button
                variant='contained'
                style={btnStyles}
                type='submit'
                >Sign In</Button>
              }
                </Box>
            </Box>
        </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
