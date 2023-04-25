import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditBook = ({ bookToEdit }) => {
    const [title, setTitle] = useState(bookToEdit.title);
    const [author, setAuthor] = useState(bookToEdit.author);
    const [category, setCategory] = useState(bookToEdit.category);
    const [price, setPrice] = useState(bookToEdit.Price);
    const [date, setDate] = useState(bookToEdit.date);

    const history = useHistory(); 

    const editBook = async () => {
        const editedBook = { title: title, author: author, category: category, price: price, date: date }
        const response = await fetch(`/books/${bookToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedBook),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            alert("Book was updated!");
        } else {
            alert(`Failed to update book, status code = ${response.status}`);
        }
        history.push("/books");
    };

    return (
        <body>
            <main>
                <h1>Edit Book Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input
                                className="exercise-name-input"
                                type="text"
                                placeholder="Enter book title"
                                value={title}
                                onChange={e => setTitle(e.target.value)} />
                            </td>
                            <td><input
                                type="text"
                                value={author}
                                placeholder="Enter author"
                                onChange={e => setAuthor(e.target.value)} />
                            </td>
                            <td><select id="dropdown"
                                onChange={e => setCategory(e.target.value)}>
                                <option value={category}>{category}</option>
                                <option value="Romance Novel">Romance Novel</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Biography">Biography</option>
                                <option value="Action-comic">Action Comic</option>
                                <option value="Non-fiction">Non-fiction</option>
                            </select>
                            </td>
                            <td><input
                                type="number"
                                value={price}
                                placeholder="Enter price"
                                onChange={e => setPrice(e.target.value)} />
                            </td>
                           
                            <td><input
                                type="text"
                                size="15"
                                placeholder="Enter date as follow: MM-DD-YY"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                            </td>
                            <td><button
                                onClick={editBook}
                            >Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </body>

    );
}

export default EditBook;
