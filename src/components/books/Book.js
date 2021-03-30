import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

  //add task sample
//   const addTask = async (e) => {
//     e.preventDefault();

//     let token = localStorage.getItem('token');
//     let config = {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': token,
//       },
//     };

//     let data = {
//       title,
//       description,
//     };
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/tasks',
//         data,
//         config
//       );

//       console.log('task added');
//     } catch (e) {
//       console.log(e.response.data.errors);
//     }
//   };


const Book = (props) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
        };

        console.log(config);

        let data = {
            params: {
                id: props.book._id
            }
        };

        console.log(data);

        try {
        const response = await axios.delete(
            'http://localhost:5000/api/books',
            {
                data: {
                    id: props.book._id
                },
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                }
            }
        );
        console.log('book deleted...');
        props.handleRefresh();
        } catch (e) {
        console.log(e);
        }
    };


  return (
    <Box display="flex" flexDirection="column" margin="10px" border="2px solid" padding="5px" width="40%">
      <h1>{props.book.name}</h1>
      <p>Author: {props.book.author}</p>
      <p>Category: {props.book.subject}</p>
      <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button> 
    </Box>
  );
};
export default Book;