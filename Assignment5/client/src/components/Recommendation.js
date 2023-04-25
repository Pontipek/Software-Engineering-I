import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';

function Recommendation({ recommendation, deleteRecommendation}) {
    return (
        <tr>
            <td>{recommendation.title}</td>
            <td>{recommendation.name}</td>
            <td>{recommendation.rating}</td>
            <td>{recommendation.comment}</td>
            <td><button class="delete-button" type="submit" onClick={() => deleteRecommendation(recommendation._id)}><RiDeleteBin6Line/></button></td>
        </tr>
    );
}

export default Recommendation;