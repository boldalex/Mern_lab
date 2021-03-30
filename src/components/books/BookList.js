import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books').then((response) => {
        setBooks(response.data);
        console.log(response);
    });
  }, [refresh]);

  const handleDelete = () => {
      setRefresh(!refresh);
  }

  

  return (
    <div>
      {books.map((book) => (
        <Book book={book} key={book.id} handleRefresh={handleDelete}/>
      ))}
    </div>
  );
};

export default BookList;