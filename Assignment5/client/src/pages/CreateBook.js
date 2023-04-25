import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreateBook(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const use_history = useHistory(); 
   
    const createBook = async () => {
        const data = { title, author, category, price, date};
        const response = await fetch('/books', {
            method: 'POST',                        
            body: JSON.stringify(data),       
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Book created!");
        }else if(response.status === 401){
            alert("Date doesn't match required format")
        } else {
            alert(`Failed to create book status code = ${response.status}`);
        }
        use_history.push("/books");
    };
    
    return (
        <body>
            <main>
                <h1>Add Book</h1>
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
                                type="text"
                                placeholder="Book Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)} />
                            </td>
                            <td><input
                                type="text"
                                value={author}
                                placeholder="author"
                                onChange={e => setAuthor(e.target.value)} />
                            </td>
                            <td><select id="dropdown"
                                onChange={e => setCategory(e.target.value)}>
                                <option >Select Category</option>
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
                                placeholder="price"
                                onChange={e => setPrice(e.target.value)} />
                            </td>
                            <td>
                                <input
                                type="text"
                                size="30"
                                placeholder="Enter date as follow: MM-DD-YY"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                            </td>
                            <td><button
                                onClick={createBook}
                            >Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </body>
    );
}


export default CreateBook;
