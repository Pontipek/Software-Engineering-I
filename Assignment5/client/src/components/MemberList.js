import React from 'react';
import Member from './Member';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {RiDeleteBin6Line, RiEditLine} from 'react-icons/ri';

function MemberList({ members, updateMember, deleteMember}) {
    return (
        <table id="exercises-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member, i) => <Member member={member} updateMember={updateMember} deleteMember={deleteMember}  key={i} />)}
                <tr>
                <td>Jose Juan</td>
                <td>josejuan@gmail.com</td>
                <td>Hanoi, Vietnam</td>
                <td>
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={<Tooltip>Update</Tooltip>}>
                    <Button variant="secondary" type='submit'><RiEditLine color="#ffc107"/></Button>
                </OverlayTrigger>
                </td>
                <td>
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={<Tooltip>Delete</Tooltip>}>
                    <Button variant="secondary" type='submit'><RiDeleteBin6Line color="red"/></Button>
                </OverlayTrigger>
                </td>
                </tr>
                <tr>
                <td>Kelly Harris</td>
                <td>kh@gmail.com</td>
                <td>London, UK</td>
                <td> <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={<Tooltip>Update</Tooltip>}>
                    <Button variant="secondary" type='submit'><RiEditLine color="#ffc107"/></Button>
                </OverlayTrigger></td>
                <td>  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={<Tooltip>Delete</Tooltip>}>
                    <Button variant="secondary" type='submit'><RiDeleteBin6Line color="red"/></Button>
                </OverlayTrigger></td>
                </tr>
            </tbody>
          
        </table>
    );
}

export default MemberList;