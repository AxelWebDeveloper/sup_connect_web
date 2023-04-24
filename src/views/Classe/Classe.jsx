import React from 'react';
import styled from 'styled-components'
import PopupClasse from "../../components/PopupClasse";
import { useState } from "react";
import PopupAssiduite from "../../components/PopupAssiduite";

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

function Classe() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Classes</TitleBloc><br/>
                <TableContainer>
                    <thead>
                    <tr>
                        <TableHeader>Classe</TableHeader>
                        <TableHeader>Élèves</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>L3 ALT</TableData>
                        <TableData>8</TableData> {/*tab.length*/}
                        <TableData>
                            <Btn onClick={() => setButtonPopup(true)} type="button">
                                détails
                            </Btn>
                            <div>
                                <PopupClasse trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <TitlePopup>L3 ALT</TitlePopup><br/>

                                    <TableContainer>
                                        <thead>
                                        <tr>
                                            <TableHeader>Nom</TableHeader>
                                            <TableHeader>Prénom</TableHeader>
                                            <TableHeader>Moy</TableHeader>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <TableRow>
                                            <TableData>LE GOFF</TableData>
                                            <TableData>Océane</TableData>
                                            <TableData>17</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>DEMOREST</TableData>
                                            <TableData>Axel</TableData>
                                            <TableData>14</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>HADDOURY</TableData>
                                            <TableData>Walid</TableData>
                                            <TableData>16</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>REBRZB</TableData>
                                            <TableData>Rberb</TableData>
                                            <TableData>12</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>EJVRIVR</TableData>
                                            <TableData>Eivur</TableData>
                                            <TableData>17</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>TGTGV</TableData>
                                            <TableData>Efoif</TableData>
                                            <TableData>20</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>AKFO</TableData>
                                            <TableData>Btyjbj</TableData>
                                            <TableData>12</TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>SPDKF</TableData>
                                            <TableData>Cnjrg</TableData>
                                            <TableData>09</TableData>
                                        </TableRow>
                                        </tbody>
                                    </TableContainer>
                                </PopupClasse>
                            </div>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>L2 ALT</TableData>
                        <TableData>32</TableData>
                        <TableData>
                            <Btn onClick={() => setButtonPopup(true)} type="button">
                                détails
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>L2 TP</TableData>
                        <TableData>32</TableData>
                        <TableData>
                            <Btn onClick={() => setButtonPopup(true)} type="button">
                                détails
                            </Btn>
                        </TableData>
                    </TableRow>

                    </tbody>
                </TableContainer>
            </Container>


        </GlobalContainer>
    );
}

export default Classe;
