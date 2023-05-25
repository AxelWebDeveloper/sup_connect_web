import React, {useState} from 'react';
import {styled} from "@mui/material/styles";

const NoteInput = ({data}) => {
    return (
        <DivUser>
            <UserData>{data.student.lastName}</UserData>
            <UserData>{data.student.firstName}</UserData>
            <UserNote>
                <DivNote>
                    <InputNote placeholder="Note" min="0" type="number" onChange={(e) => data.amount = e.target.value} />
                    /
                    <InputNote placeholder="20" min="0" type="number" onChange={(e) => data.total = e.target.value} />
                </DivNote>
                <Line></Line>
                <InputCoef placeholder="Coeff" min="0" type="number" onChange={(e) => data.coefficient = e.target.value}/>
            </UserNote>
        </DivUser>
    );
};

const DivUser = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  :hover {
    background: lightgray;
  }
`

const UserData = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 25%;
  height: 100%;
  align-items: center;
  border: 3px solid white;
`;

const UserNote = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 3px solid white;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const DivNote = styled("div")`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
`

const InputNote = styled("input")`
  height: 100%;
  width: 50%;
  border: none;
  outline: none;
  text-align: center;
  padding: 0;
`

const InputCoef = styled("input")`
  height: 100%;
  width: 50%;
  border: none;
  outline: none;
  text-align: center;
  padding: 0;
`

const Line = styled("div")`
  background: black;
  height: 60%;
  width: 1px;
`


export default NoteInput;
