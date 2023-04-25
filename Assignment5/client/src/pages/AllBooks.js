import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AllBooks({ setBookToEdit }) {

    const [books, setBooks] = useState([]);
    const use_history = useHistory();

    const updateBook = book => {
        setBookToEdit(book);
        use_history.push("/edit-book");
    }

    const deleteBook = async _id => {
        const response = await fetch(`/books/${_id}`, { method: 'DELETE' }); 
        if (response.status === 204) {
            setBooks(books.filter(e => e._id !== _id));
            alert("Book was deleted!");
        } else {
            console.error(`Failed to delete book with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const loadBooks = async () => {            
        const response = await fetch('/books'); 
        const data = await response.json(); 
        setBooks(data);  
    }

    useEffect(() => {loadBooks();}, []);

    return (
        <body>
            <main>
                <BookList books={books} updateBook={updateBook} deleteBook={deleteBook}></BookList>
                <br/>
                {<Link className="App-link" to="/create-book"><button type="button">Add Book</button></Link>}
            </main>
        </body>

    );
}

export default AllBooks;