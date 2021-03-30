import { Box, Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Login = (props) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value});
    }

    const onLogin = async (e) => {
        e.preventDefault();
        
        let config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
        let data = {
        email: loginData.email,
        password: loginData.password,
        };
        try {
        const response = await axios.post(
            'http://localhost:5000/api/auth/login',
            data,
            config
        );
        localStorage.setItem('token', response.data.token);
        console.log(response);
        history.push("/books");

        } catch (e) {
        console.log('error ', e);
        }
    }


  return (
    <Box padding="20px" display="flex" flexDirection="column">
        
        <Box margin="5px" width="40%">
            <TextField variant="outlined" type="email" required label="Email" name="email" onChange={handleChange}/>
        </Box>
        
        <Box margin="5px" width="40%">
            <TextField variant="outlined" type="password" required label="Password" name="password" onChange={handleChange}/>
        </Box>

        <Box marginTop="40px">
            <Button variant="contained" color="primary" onClick={onLogin}>Login</Button>
        </Box>
    </Box> 
  );
};

export default Login;