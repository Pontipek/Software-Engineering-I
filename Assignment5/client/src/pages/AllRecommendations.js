import React from 'react';
import { Link } from 'react-router-dom';
import RecommendationList from '../components/RecommendationList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AllRecommendations({}) {

    const [recommendations, setRecommendations] = useState([]);
    const use_history = useHistory();

    const deleteRecommendation = async _id => {
        const response = await fetch(`/recommendations/${_id}`, { method: 'DELETE' }); 
        if (response.status === 204) {
            setRecommendations(recommendations.filter(e => e._id !== _id));
            alert("Recommendation was deleted!");
        } else {
            console.error(`Failed to delete recommendation with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const loadRecommendations = async () => {            
        const response = await fetch('/recommendations'); 
        const data = await response.json(); 
        setRecommendations(data);  
    }

    useEffect(() => {loadRecommendations();}, []);

    return (
        <body>
            <main>
                <RecommendationList recommendations={recommendations} deleteRecommendation={deleteRecommendation}></RecommendationList>
            </main>
        </body>

    );
}

export default AllRecommendations;