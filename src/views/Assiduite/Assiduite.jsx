import React from 'react';
import styled from 'styled-components'

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
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

const TableHeaderMiss = styled.th`
  background-color: #E37878;
  border-radius: 30px;
  color: white;
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

const Btn = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgb(255, 255, 255);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
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

function Assiduite() {
    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Absence / Retard</TitleBloc><br/>
                <TableContainer>
                    <thead>
                    <tr>
                        <TableHeader>Nom</TableHeader>
                        <TableHeader>Prénom</TableHeader>
                        <TableHeader>Classe</TableHeader>
                        <TableHeader>Total</TableHeader>
                        <TableHeaderMiss>Injustifié</TableHeaderMiss>
                        <TableHeader></TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>LE GOFF</TableData>
                        <TableData>Océane</TableData>
                        <TableData>L3 ALT Paris</TableData>
                        <TableData>28h00</TableData>
                        <TableData>09h00</TableData>
                        <TableData>
                            <Btn type="button" relancer>
                                relancer
                            </Btn>
                        </TableData>
                        <TableData>
                            <Btn type="button" i>
                                i
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>DEMOREST</TableData>
                        <TableData>Axel</TableData>
                        <TableData>L1 Cergy</TableData>
                        <TableData>21h00</TableData>
                        <TableData>11h00</TableData>
                        <TableData>
                            <Btn type="button" relancer>
                                relancer
                            </Btn>
                        </TableData>
                        <TableData>
                            <Btn type="button" i>
                                i
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>L2 ALT Paris</TableData>
                        <TableData>03h30</TableData>
                        <TableData>01h00</TableData>
                        <TableData>
                            <Btn type="button" relancer>
                                relancer
                            </Btn>
                        </TableData>
                        <TableData>
                            <Btn type="button" i>
                                i
                            </Btn>
                        </TableData>
                    </TableRow>

                    </tbody>
                </TableContainer>
            </Container>


        </GlobalContainer>
    );
}

export default Assiduite;
