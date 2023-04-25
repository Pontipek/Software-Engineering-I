import React from 'react';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
//Tooltip
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {RiDeleteBin6Line, RiEditLine} from 'react-icons/ri';
//Modal
import Modal from 'react-bootstrap/Modal';

function Book({ book, updateBook, deleteBook}) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.price}</td>
            <td>{book.date}</td>
            <td>
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={<Tooltip>Update</Tooltip>}>
                    <Button variant="secondary" type='submit' onClick={() => updateBook(book)}><RiEditLine color="#ffc107"/></Button>
                </OverlayTrigger>
            </td>  
            <td>
                <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={<Tooltip>Delete</Tooltip>}>
                    <Button variant="secondary" type='submit' onClick={handleShow}><RiDeleteBin6Line color="red"/></Button>
                </OverlayTrigger>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Would you like to Delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>No</Button>
                    <Button variant="primary"  onClick={() => deleteBook(book._id)}>Delete</Button>
                </Modal.Footer>
                </Modal>
            </td>
         
        </tr>
    );
}

export default Book;