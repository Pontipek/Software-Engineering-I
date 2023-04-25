import React from 'react';
import Book from './Book';

function BookList({ books, updateBook, deleteBook}) {
    return (
        <table id="exercises-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, i) => <Book book={book} updateBook={updateBook} deleteBook={deleteBook}  key={i} />)}
            </tbody>
        </table>
    );
}

export default BookList;