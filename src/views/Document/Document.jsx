import React from 'react';
import styled from 'styled-components'
import { useState } from "react";

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
  background-color: #eeeeee;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

const TableContainer = styled.table`
  border-collapse: separate;
  width: 100%;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const TableHeader = styled.th`
  color: black;
  padding: 10px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #F5F5F5;
  }
`;

const TableData = styled.td`
  padding: 5px;
`;

const TitleBloc = styled.h2`
  text-align: center;
`;
const TitlePopup = styled.h3`
  text-align: center;
`;

const Btn = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgb(255, 255, 255);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  text-align: center;
  transition: all 0.2s;
  background-color: #7299FE;

  &:hover {
    color: #7299FE;
    background-color: rgb(255, 255, 255);
  }
`;

function Document() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Documents</TitleBloc><br/>
                <TableContainer>
                    <thead>
                    <tr>
                        <TableHeader>Nom</TableHeader>
                        <TableHeader>Type</TableHeader>
                        <TableHeader>Contexte</TableHeader>
                        <TableHeader>Créateur</TableHeader>
                        <TableHeader>Modifié le</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>
                            <a href="#">Bulletin</a>
                        </TableData>
                        <TableData>Dossier</TableData>
                        <TableData>-</TableData>
                        <TableData>-</TableData>
                        <TableData>21/03/23</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>
                            <a href="#">Préinscription</a>
                        </TableData>
                        <TableData>Dossier</TableData>
                        <TableData>-</TableData>
                        <TableData>-</TableData>
                        <TableData>21/09/22</TableData>
                    </TableRow>

                    </tbody>
                </TableContainer>
            </Container>


        </GlobalContainer>
    );
}

export default Document;
