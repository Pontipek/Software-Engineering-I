import React from 'react';
import {RiDeleteBin6Line, RiEditLine} from 'react-icons/ri';

function Member({ member, updateMember, deleteMember}) {
    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.address}</td>
            <td><button class="update-button" type='submit' onClick={() => updateMember(member)}><RiEditLine/></button></td>
            <td><button class="delete-button" type="submit" onClick={() => deleteMember(member._id)}><RiDeleteBin6Line/></button></td>
        </tr>
    );
}

export default Member;