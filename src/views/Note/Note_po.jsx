import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import Note_input from "./Note_input";

const NotePo = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        const getListNotes = async () => {
            const { data } = await axios.get('http://localhost:3000/api/grades/newListGrade/1/1');
            setStudents(data);
        }

        getListNotes();
    }, [])

    const onSubmit = async () => {
        console.log("JE SUIS LA")
        await axios.post('http://localhost:3000/api/grades', students);

    }

    const lesson = {
        name: 'Java avancé',
    }

    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Notes</TitleBloc><br/>

                <DivLesson>
                    <NameLesson>
                        <p>
                            {lesson.name}
                        </p>
                    </NameLesson>
                </DivLesson>

                <DivNotes>
                    <TabContainer>
                        <NoteTitle>
                            <NoteHeader>Nom</NoteHeader>
                            <NoteHeader>Prénom</NoteHeader>
                            <NoteCoef>
                                <p>Note</p>
                                <Line></Line>
                                <p>Coef</p>
                            </NoteCoef>
                        </NoteTitle>
                        <AttendanceBody>
                            {students.map((option, index) => (
                                <Note_input key={index} data={option}></Note_input>
                            ))}
                        </AttendanceBody>
                    </TabContainer>
                    <ButtonValidate type="submit" onClick={onSubmit} >Valider les notes</ButtonValidate>
                </DivNotes>
            </Container>


        </GlobalContainer>
    );
};

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

const DivNotes = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
`

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: separate;
  width: 100%;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const NoteTitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
`

const NoteHeader = styled.div`
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

const NoteCoef = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  color: black;
  background: rgba(33,42,255,0.75);
  border: 3px solid white;
  color: white;
`;

const Line = styled.div`
  background: whitesmoke;
  height: 60%;
  width: 1px;
`

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

export default NotePo;
