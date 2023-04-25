import React from 'react';
import Recommendation from './Recommendation';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {RiDeleteBin6Line} from 'react-icons/ri';

function RecommendationList({ recommendations, deleteRecommendation}) {
    return (
        <table id="exercises-table">
            <thead>
                <tr>
                    <th>Book's Title</th>
                    <th>Member's Name</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {recommendations.map((recommendation, i) => <Recommendation recommendation={recommendation} deleteRecommendation={deleteRecommendation}  key={i} />)}
                <tr>
                <td>The Yesterday Man</td>
                <td>Kelly Harris</td>
                <td>5</td>
                <td>It is really Good.</td>

                <td> 
                    <OverlayTrigger
                        key={"top"}
                        placement={"top"}
                        overlay={<Tooltip>Delete</Tooltip>}>
                    <Button variant="secondary"><RiDeleteBin6Line color='red'/></Button>
                    </OverlayTrigger>
                </td>
                </tr>
                <tr>
                <td>The Last date</td>
                <td>Kelly Harris</td>
                <td>4</td>
                <td>Awesome</td>
                <td>
                    <OverlayTrigger
                        key={"top"}
                        placement={"top"}
                        overlay={<Tooltip>Delete</Tooltip>}>
                    <Button variant="secondary"><RiDeleteBin6Line color='red'/></Button>
                    </OverlayTrigger>
                </td>
                </tr>
            </tbody>
        </table>
    );
}

export default RecommendationList;