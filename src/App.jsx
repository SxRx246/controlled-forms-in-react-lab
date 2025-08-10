// src/App.jsx
import { useState } from 'react';
import './App.css';
import Bookshelf from './Bookshelf.jsx';

const App = () => {
  const [books , setbooks] = useState([{}])
  const [newBook , setNewBook] = useState([{
    title: "",
    author: ""
  }])

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;