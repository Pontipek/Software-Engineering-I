import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreateMember(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const use_history = useHistory(); 
   
    const createMember = async () => {
        const data = { name, email, address};
        const response = await fetch('/members', {
            method: 'POST',                        
            body: JSON.stringify(data),       
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Member created!");
        } else {
            alert(`Failed to create Member status code = ${response.status}`);
        }
        use_history.push("/");
    };
    
    return (
        <body>
            <main>
                <h1>Add Member</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input
                                type="text"
                                placeholder="Member Name"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            </td>
                            <td><input
                                type="text"
                                value={email}
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)} />
                            </td>
                            <td><input
                                type="text"
                                size="15"
                                value={address}
                                placeholder="address"
                                onChange={e => setAddress(e.target.value)} />
                            </td>
                            <td><button
                                onClick={createMember}
                            >Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </body>
    );
}


export default CreateMember;
