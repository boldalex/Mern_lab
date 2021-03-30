import { Box, Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const CreateBook = (props) => {

    const history = useHistory();
    const [bookData, setBookData] = useState({
        name: '',
        author: '',
        subject: ''
    })

    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value});
    }

    const handleCreate = async () => {
        let token = localStorage.getItem('token');
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
        };

        console.log(config);

        let data = {
            name: bookData.name,
            author: bookData.author,
            subject: bookData.subject
        };

        console.log(data);

        try {
        const response = await axios.post(
            'http://localhost:5000/api/books',
            data,
            config
        );
        console.log('book added...');
        history.push("/books");
        } catch (e) {
        console.log(e);
        }
    };


  return (
    <Box padding="20px" display="flex" flexDirection="column">
        
        <Box margin="5px" width="40%">
            <TextField variant="outlined" required label="Name" name="name" onChange={handleChange}/>
        </Box>
        
        <Box margin="5px" width="40%">
            <TextField variant="outlined" required label="Author" name="author" onChange={handleChange}/>
        </Box>

        <Box margin="5px" width="40%">
            <TextField variant="outlined" required label="Subject" name="subject" onChange={handleChange}/>
        </Box>

        <Box marginTop="40px">
            <Button variant="contained" color="primary" onClick={handleCreate}>Save</Button>
        </Box>
    </Box> 
  );
};
export default CreateBook;