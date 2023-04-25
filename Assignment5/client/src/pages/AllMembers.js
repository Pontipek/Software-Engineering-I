import React from 'react';
import { Link } from 'react-router-dom';
import MemberList from '../components/MemberList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AllMembers({ setMemberToEdit }) {

    const [members, setMembers] = useState([]);
    const use_history = useHistory();

    const updateMember = member => {
        setMemberToEdit(member);
        use_history.push("/edit-member");
    }

    const deleteMember = async _id => {
        const response = await fetch(`/members/${_id}`, { method: 'DELETE' }); 
        if (response.status === 204) {
            setMembers(members.filter(e => e._id !== _id));
            alert("Member was deleted!");
        } else {
            console.error(`Failed to delete member with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const loadMembers = async () => {            
        const response = await fetch('/members'); 
        const data = await response.json(); 
        setMembers(data);  
    }

    useEffect(() => {loadMembers();}, []);

    return (
        <body>
            <main>
                <MemberList members={members} updateMember={updateMember} deleteMember={deleteMember}></MemberList>
                <br/>
                {<Link className="App-link" to="/create-member"><button type="button">Add Member</button></Link>}
            </main>
        </body>

    );
}

export default AllMembers;