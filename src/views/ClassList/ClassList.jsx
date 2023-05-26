import React, {useEffect, useState} from 'react';
import * as styled from './ClassList.styled'
import axios from "axios";
import Card from "./components/Card/Card";
import Container from "../../components/Container/Container";

/**
 * Listes des classes ainsi que les élèves de chaque classe
 * @returns {JSX.Element}
 * @constructor
 */
const ClassList = () => {
    const [listClasses, setListClasses] = useState([]);

    useEffect(() => {
        const getClasses = async () => {
            const { data } = await axios.get('http://localhost:3000/api/classes/schools/2/classes');
            setListClasses(data);
        }

        getClasses();
    }, [])

    const students = [
        { nom: 'Dupont', prenom: 'Jean', age: 12, classe: '6ème' },
        { nom: 'Martin', prenom: 'Emma', age: 13, classe: '5ème' },
        { nom: 'Martin', prenom: 'Emma', age: 13, classe: '5ème' },
        { nom: 'Martin', prenom: 'Emma', age: 13, classe: '5ème' },
        { nom: 'Martin', prenom: 'Emma', age: 13, classe: '5ème' },
        { nom: 'Martin', prenom: 'Emma', age: 13, classe: '5ème' },
        { nom: 'Martin', prenom: 'Emma', age: 13, classe: '5ème' },
    ];


    return (
        <Container>
            <styled.Wrapper>
                <styled.ListClasses>
                    {listClasses.map((item, index) => {
                        return (
                            <Card item={item} key={index} />
                        )
                    })}
                </styled.ListClasses>
            </styled.Wrapper>
        </Container>
    );
}

export default ClassList;
