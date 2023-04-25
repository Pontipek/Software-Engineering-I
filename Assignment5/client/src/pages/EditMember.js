import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditMember = ({ memberToEdit }) => {
    const [name, setName] = useState(memberToEdit.name);
    const [email, setEmail] = useState(memberToEdit.email);
    const [address, setAddress] = useState(memberToEdit.address);

    const history = useHistory(); 

    const editMember = async () => {
        const editedMember = { name: name, email: email, address: address}
        const response = await fetch(`/members/${memberToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedMember),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            alert("Member information was updated!");
        } else {
            alert(`Failed to update member information, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <body>
            <main>
                <h1>Edit Member Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input
                                className="exercise-name-input"
                                type="text"
                                placeholder="Enter member name"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            </td>
                            <td><input
                                type="email"
                                value={email}
                                placeholder="Enter email"
                                onChange={e => setEmail(e.target.value)} />
                            </td>
                            <td><input
                                type="text"
                                size="15"
                                value={address}
                                placeholder="Enter address"
                                onChange={e => setAddress(e.target.value)} />
                            </td>
                            <td><button
                                onClick={editMember}
                            >Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </body>

    );
}

export default EditMember;