import React from 'react';
import * as styled from "./Card.styled";
import {useNavigate} from "react-router-dom";

const Card = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = (e, classId) => {
        e.preventDefault();
        navigate(`/classes/${classId}/students`);
    };

    return (
        <styled.Card>
            <styled.CardClassHead />
            <styled.CardClassBody>
                <div>
                    <h3>{item.name}</h3>
                    <p>20 élèves</p>
                </div>
                <styled.StudentsDetails onClick={(e) => handleClick(e, item.id)}>Gestion des élèves</styled.StudentsDetails>
            </styled.CardClassBody>
        </styled.Card>
    );
};

export default Card;
