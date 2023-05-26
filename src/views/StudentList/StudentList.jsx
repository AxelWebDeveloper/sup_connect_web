import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as styled from "../StudentList/StudentList.styled";
import CustomTable from "../../components/CustomTable/CustomTable";
import Container from "../../components/Container/Container";
import axios from "axios";
import {Box} from "../StudentList/StudentList.styled";

const StudentList = () => {
    const { id } = useParams();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/users/classes/${id}`);
            setStudents(data.map((student) => {
                return {
                    id: student.id,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    mail: student.mail,
                    age: student.age,
                }
            }));
        }

        getStudents();
    }, [id])

    const headers = [
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'mail' },
        { name: 'age' },
    ];

    return (
        <Container>
            <styled.Wrapper>
                <div>
                    <styled.Box>
                        <div style={{ overflowX: 'scroll', height: '100%' }}>
                            <CustomTable data={students} itemsPerPage={17} headers={headers} />
                        </div>
                    </styled.Box>
                </div>
            </styled.Wrapper>
        </Container>
    );
};

export default StudentList;
