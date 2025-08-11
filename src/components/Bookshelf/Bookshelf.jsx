import { useState } from 'react';
const Bookshelf = ({ handleSubmit, handleInputChange, newBook, books }) => {

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Title:</label>
                        <input value={newBook.title} type="text" name="title" onChange={handleInputChange} />
                        <label htmlFor="">Author:</label>
                        <input value={newBook.author} type="text" name="author" onChange={handleInputChange} />
                        <br />
                        <button type='Submit'>Add Book</button>
                    </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book , index) => (
                    <div className='bookCard' key={index}>
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Bookshelf