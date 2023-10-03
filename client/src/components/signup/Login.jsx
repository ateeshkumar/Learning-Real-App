import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import {Box,Typography,TextField,Button} from '@mui/material';
import axios from 'axios';
import { authAction } from '../../redux/store';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input,setinput] = useState({
      email:'',
      password:'',
    });
    const handleChange = (e)=>{
      
      setinput((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
      }))
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const {data} = await axios.post("http://localhost:8080/api/v1/user/login",{
          email:input.email,
          password:input.password
        });
        if(data.success){
            console.log(data.user);
          if(data.user.email==='ateesh2002@gmail.com'){
            dispatch(authAction.login());
            localStorage.setItem("adminId",data.user._id);
            navigate('/admin');
            toast.Login('Admin login Successfully');
            
          }else{  
          dispatch(authAction.login());
          localStorage.setItem("userId",data.user._id);
          navigate('/');
          toast.Login('User login Successfully');
          }
        }else{
          toast.success(data.massage);
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <form onSubmit={handleSubmit}>
      <Box maxWidth={450}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      margin={'auto'}
      marginTop={5}
      boxShadow="10px 10px 20px #ccc"
      padding={3}
      borderRadius={5}>
        <Typography variant='h4'
        sx={{textTransform:"upperCase"}} padding={3} textAlign={'center'}>Login</Typography>
        <TextField
       placeholder='Email'
       name='email'
       value={input.email}
       margin='normal'
       type='email'
       onChange={handleChange}/>
        <TextField
        placeholder='Password'
        name='password'
        value={input.password}
        margin='normal'
        type='password'
        onChange={handleChange}/>
        
        <Button type='submit'
        sx={{borderRadius:3,marginTop:3}}
        variant='contained'
        color='primary'>Submit</Button>
        <Button
        sx={{borderRadius:3,marginTop:3}}
        onClick={()=>navigate("/register")}>
        Not a user ? please Register</Button>
      </Box>
      </form>
    )
}

export default Login;