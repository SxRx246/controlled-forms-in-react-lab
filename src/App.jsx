import { useState } from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';

const App = () => {
  const [books , setbooks] = useState([])
  const [newBook , setNewBook] = useState({
    title: "",
    author: ""
  })

  const handleInputChange = (event) =>{
    setNewBook({...newBook , [event.target.name]: event.target.value })
    console.log(newBook)
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("Form submitted:", newBook);
    const newBookshelf = [...books, newBook]
    setbooks(newBookshelf)
    setNewBook({ title: "", author: "" })
    console.log(newBookshelf)
  }

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf handleInputChange={handleInputChange} newBook={newBook} handleSubmit={handleSubmit} books={books}/>
    </>
  );
};

export default App;