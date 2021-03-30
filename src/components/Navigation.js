import { Box, Button } from '@material-ui/core';
import React from 'react';

const Navigation = (props) => {
  return (
    <Box display="flex" justifyContent="space-around" margin="10px">
        <Button href="/books" variant="outlined" color="primary">Books</Button>
        <Button href="/createBook" variant="outlined" color="primary">Create Book</Button>
        <Button href="/login" variant="outlined" color="primary">Login</Button>
        <Button href="/signup" variant="outlined" color="primary">Signup</Button>
    </Box>
  );
};

export default Navigation;