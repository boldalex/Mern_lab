import { Box, Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Signup = (props) => {
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value});
    }

    const onSignup = async (e) => {
        e.preventDefault();
        console.log(signupData);

        let config = {
            headers: {
              'Content-Type': 'application/json',
            },
        };
        let data = {
        name: signupData.username,
        email: signupData.email,
        password: signupData.password,
        };
        try {
        const response = await axios.post(
            'http://localhost:5000/api/auth/signup',
            data,
            config
        );
        console.log(response);
        history.push('/login');
        } catch (e) {
        console.log('error ', e);
        }
    }

  return (
      <Box padding="20px" display="flex" flexDirection="column">
          <Box margin="5px" width="40%">
            <TextField variant="outlined" required label="Username" name="username" onChange={handleChange}/>
          </Box>
          
          <Box margin="5px" width="40%">
            <TextField variant="outlined" type="email" required label="Email" name="email" onChange={handleChange}/>
          </Box>
          

          <Box margin="5px" width="40%">
            <TextField variant="outlined" type="password" required label="Password" name="password" onChange={handleChange}/>
          </Box>
          

          <Box margin="5px" width="40%">
            <TextField variant="outlined" required type="password" label="Confirm Password" name="password2" onChange={handleChange}/>
          </Box>

          
          <Box marginTop="40px">
          <Button variant="contained" color="primary" onClick={onSignup}>Signup</Button>
        </Box>
      </Box>      
  );
};

export default Signup;