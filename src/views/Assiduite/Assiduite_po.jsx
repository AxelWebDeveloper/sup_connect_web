import React, {useState, ChangeEvent, useEffect} from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form";

import Select from 'react-select';
import AttendanceSwitch from "./AttendanceSwitch";
import axios from "axios";

/**
 * Gestion des absences et retards côté PROF
 * @returns {JSX.Element}
 * @constructor
 */
const AssiduitePo = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const getListAtendance = async () => {
            const { data } = await axios.get('http://localhost:3000/api/delays/newdelay/1/1');
            setStudents(data);
        }

        getListAtendance();
    }, [])

    const users = [
        {
            "id": 1,
            "firstName": "Walid",
            "lastName": "HADDOURY",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 2,
            "firstName": "Alexis",
            "lastName": "MAJZRACK",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 3,
            "firstName": "Axel",
            "lastName": "DEMOREST",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 4,
            "firstName": "Oceane",
            "lastName": "LE GOFF",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 5,
            "firstName": "Mael",
            "lastName": "LEGRAND",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 6,
            "firstName": "Nohan",
            "lastName": "MARIE LOUISE",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 7,
            "firstName": "Allan",
            "lastName": "PEREIRA",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 8,
            "firstName": "Merwan",
            "lastName": "LAOUINI",
            "isPresent": true,
            "isLate": ""
        },
        {
            "id": 9,
            "firstName": "Loic",
            "lastName": "GOURIOU",
            "isPresent": true,
            "isLate": ""
        },
    ]

    const onSubmit = async () => {
        await axios.post('http://localhost:3000/api/delays/', students);
        console.log(students);
    }

    const lesson = {
        name: 'Java avancé',
        start_lesson: '9h00',
        end_lesson: '12h00'
    }

    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Absence / Retard</TitleBloc><br/>

                <DivLesson>
                    <NameLesson>
                        <p>
                            {lesson.name}
                        </p>
                    </NameLesson>
                    <InfoLesson>
                        <p>
                            {lesson.start_lesson} à  {lesson.end_lesson}
                        </p>
                    </InfoLesson>
                </DivLesson>

                <DivAttendance>
                    <TableContainer>
                        <AttendanceTitle>
                            <AttendanceHeader>Nom</AttendanceHeader>
                            <AttendanceHeader>Prénom</AttendanceHeader>
                            <AttendanceHeader>Retard</AttendanceHeader>
                            <AttendanceHeader>Présent</AttendanceHeader>
                        </AttendanceTitle>
                        <AttendanceBody>
                        {students.map(option => (
                                <AttendanceSwitch key={option.id} data={option}></AttendanceSwitch>
                        ))}
                        </AttendanceBody>
                    </TableContainer>
                    <ButtonValidate type="submit" onClick={onSubmit} >Terminer l'appel</ButtonValidate>
                </DivAttendance>
            </Container>


        </GlobalContainer>
    );
}

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

const TitleBloc = styled.h2`
  margin-top: 50px;
  text-align: center;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin-bottom: 20px;
`;

const DivLesson = styled.div`
  display: flex;
  height: 50px;
  width: calc(80% - 6px);
  background: rgba(33,42,255,0.75);
  color: white;
  justify-content: space-evenly;
`

const NameLesson = styled.div`
  width: 40%;
  height: 100%;
  text-align: center;
  justify-content: center;
  font-weight: bolder;
`

const InfoLesson = styled.div`
  width: 40%;
  height: 100%;
  text-align: center;
  justify-content: center;
  font-weight: bolder;
`

const DivAttendance = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
`

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 100%;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const AttendanceTitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
`

const AttendanceHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
  color: black;
  background: rgba(33,42,255,0.75);
  border: 3px solid white;
  color: white;
`;

const AttendanceBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ButtonValidate = styled.button`
  background: lightgreen;
  height: 50px;
  width: 25%;
  border: 3px solid white;
  text-decoration: none;
  :hover {
    background: #33FF5B;
  }
`
export default AssiduitePo;
