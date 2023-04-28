import React, {useEffect, useState} from 'react';
import * as styled from './Classe.styled'
import {MdAdd} from 'react-icons/md';
import axios from "axios";
import Table from "./components/Table/Table";

/**
 * Listes des classes ainsi que les élèves de chaque classe
 * @returns {JSX.Element}
 * @constructor
 */
const Classe = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [listClasses, setListClasses] = useState([]);
    const [showStudents, setShowStudents] = useState(false);

    useEffect(() => {
        const getClasses = async () => {
            const { data } = await axios.get('http://localhost:3000/class/school/1');
            setListClasses(data);
        }

        getClasses();
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        setShowStudents(!showStudents);
    };

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
        <styled.Container>
            { showStudents && (
                <div style={{ marginBottom: '20px', marginLeft: '20px' }}>
                    <styled.AddStudentButton><MdAdd style={{ marginRight: '2px', marginBottom: '2.5px' }} size={15} /> Ajouter un élève</styled.AddStudentButton>
                </div>
            )}
            <styled.ListClasses>
                {listClasses.map((item, index) => {
                    return (
                        <styled.CardClass key={index}>
                            <styled.CardClassHead />
                            <styled.CardClassBody>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>20 élèves</p>
                                </div>
                                <styled.StudentsDetails onClick={handleClick}>Gestion des élèves</styled.StudentsDetails>
                            </styled.CardClassBody>
                        </styled.CardClass>
                    )
                })}
            </styled.ListClasses>
            {/*<styled.TableContainer>
                <Table students={students} />
            </styled.TableContainer>*/}
            {/*<styled.TitleBloc>Classes</styled.TitleBloc><br/>
            <styled.TableContainer>
                <thead>
                <tr>
                    <styled.TableHeader>Classe</styled.TableHeader>
                    <styled.TableHeader>Élèves</styled.TableHeader>
                    <styled.TableHeader></styled.TableHeader>
                </tr>
                </thead>
                <tbody>
                <styled.TableRow>
                    <styled.TableData>L3 ALT</styled.TableData>
                    <styled.TableData>8</styled.TableData>
                    <styled.TableData>
                        <styled.Btn onClick={() => setButtonPopup(true)} type="button">
                            détails
                        </styled.Btn>
                        <div>
                            <PopupClasse trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <styled.TitlePopup>L3 ALT</styled.TitlePopup><br/>

                                <styled.TableContainer>
                                    <thead>
                                    <tr>
                                        <styled.TableHeader>Nom</styled.TableHeader>
                                        <styled.TableHeader>Prénom</styled.TableHeader>
                                        <styled.TableHeader>Moy</styled.TableHeader>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <styled.TableRow>
                                        <styled.TableData>LE GOFF</styled.TableData>
                                        <styled.TableData>Océane</styled.TableData>
                                        <styled.TableData>17</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>Axel</styled.TableData>
                                        <styled.TableData>DEMOREST</styled.TableData>
                                        <styled.TableData>14</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>HADDOURY</styled.TableData>
                                        <styled.TableData>Walid</styled.TableData>
                                        <styled.TableData>16</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>REBRZB</styled.TableData>
                                        <styled.TableData>Rberb</styled.TableData>
                                        <styled.TableData>12</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>EJVRIVR</styled.TableData>
                                        <styled.TableData>Eivur</styled.TableData>
                                        <styled.TableData>17</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>TGTGV</styled.TableData>
                                        <styled.TableData>Efoif</styled.TableData>
                                        <styled.TableData>20</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>AKFO</styled.TableData>
                                        <styled.TableData>Btyjbj</styled.TableData>
                                        <styled.TableData>12</styled.TableData>
                                    </styled.TableRow>
                                    <styled.TableRow>
                                        <styled.TableData>SPDKF</styled.TableData>
                                        <styled.TableData>Cnjrg</styled.TableData>
                                        <styled.TableData>09</styled.TableData>
                                    </styled.TableRow>
                                    </tbody>
                                </styled.TableContainer>
                            </PopupClasse>
                        </div>
                    </styled.TableData>
                </styled.TableRow>
                <styled.TableRow>
                    <styled.TableData>L2 ALT</styled.TableData>
                    <styled.TableData>32</styled.TableData>
                    <styled.TableData>
                        <styled.Btn onClick={() => setButtonPopup(true)} type="button">
                            détails
                        </styled.Btn>
                    </styled.TableData>
                </styled.TableRow>
                <styled.TableRow>
                    <styled.TableData>L2 TP</styled.TableData>
                    <styled.TableData>32</styled.TableData>
                    <styled.TableData>
                        <styled.Btn onClick={() => setButtonPopup(true)} type="button">
                            détails
                        </styled.Btn>
                    </styled.TableData>
                </styled.TableRow>

                </tbody>
            </styled.TableContainer>*/}
        </styled.Container>
    );
}

export default Classe;
