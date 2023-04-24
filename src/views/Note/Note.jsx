import React from 'react';
import styled from 'styled-components';
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

const TitleBloc = styled.h2`
    text-align: center;
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
  color: white;
  border-radius: 30px;
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

const TitleClasse = styled.h2`
  width: 150px;
  text-align: center;
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: white;
  background: #EAAA6F;
  border-radius: 15px;
`;

const Note = () => {
    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Notes</TitleBloc>

                <center>
                    <TitleClasse>L3 ALT Paris</TitleClasse>
                </center>

                <TableContainer>
                    <thead>
                    <tr>
                        <TableHeader>Nom</TableHeader>
                        <TableHeader>Prénom</TableHeader>
                        <TableHeader>Note</TableHeader>
                        <TableHeader>Coef</TableHeader>
                        <TableHeader>Commentaire</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>LE GOFF</TableData>
                        <TableData>Océane</TableData>
                        <TableData>
                            <input type="number" id="notePerso" name="notePerso" required></input><br/>
                            <input type="number" id="coefPerso" name="coefPerso" required></input>
                        </TableData>
                        <TableData>
                            <input type="number" id="noteGroupe" name="noteGroupe" required></input><br/>
                            <input type="number" id="coefGroupe" name="coefGroupe" required></input>
                        </TableData>
                        <TableData>
                            <input type="text" id="name" name="name" required size="20"></input>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>
                            <input type="number" id="notePerso" name="notePerso" required></input><br/>
                            <input type="number" id="coefPerso" name="coefPerso" required></input>
                        </TableData>
                        <TableData>
                            <input type="number" id="noteGroupe" name="noteGroupe" required></input><br/>
                            <input type="number" id="coefGroupe" name="coefGroupe" required></input>
                        </TableData>
                        <TableData>
                            <input type="text" id="name" name="name" required size="20"></input>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>DEMOREST</TableData>
                        <TableData>Axel</TableData>
                        <TableData>
                            <input type="number" id="notePerso" name="notePerso" required></input><br/>
                            <input type="number" id="coefPerso" name="coefPerso" required></input>
                        </TableData>
                        <TableData>
                            <input type="number" id="noteGroupe" name="noteGroupe" required></input><br/>
                            <input type="number" id="coefGroupe" name="coefGroupe" required></input>
                        </TableData>
                        <TableData>
                            <input type="text" id="name" name="name" required size="20"></input>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>CORNEC</TableData>
                        <TableData>Gauthier</TableData>
                        <TableData>
                            <input type="number" id="notePerso" name="notePerso" required></input><br/>
                            <input type="number" id="coefPerso" name="coefPerso" required></input>
                        </TableData>
                        <TableData>
                            <input type="number" id="noteGroupe" name="noteGroupe" required></input><br/>
                            <input type="number" id="coefGroupe" name="coefGroupe" required></input>
                        </TableData>
                        <TableData>
                            <input type="text" id="name" name="name" required size="20"></input>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>CORNEC</TableData>
                        <TableData>Gauthier</TableData>
                        <TableData>
                            <input type="number" id="notePerso" name="notePerso" required></input><br/>
                            <input type="number" id="coefPerso" name="coefPerso" required></input>
                        </TableData>
                        <TableData>
                            <input type="number" id="noteGroupe" name="noteGroupe" required></input><br/>
                            <input type="number" id="coefGroupe" name="coefGroupe" required></input>
                        </TableData>
                        <TableData>
                            <input type="text" id="name" name="name" required size="20"></input>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>CORNEC</TableData>
                        <TableData>Gauthier</TableData>
                        <TableData>
                            <input type="number" id="notePerso" name="notePerso" required></input><br/>
                            <input type="number" id="coefPerso" name="coefPerso" required></input>
                        </TableData>
                        <TableData>
                            <input type="number" id="noteGroupe" name="noteGroupe" required></input><br/>
                            <input type="number" id="coefGroupe" name="coefGroupe" required></input>
                        </TableData>
                        <TableData>
                            <input type="text" id="name" name="name" required size="20"></input>
                        </TableData>
                    </TableRow>
                    </tbody>
                </TableContainer>
            </Container>
        </GlobalContainer>
    );
};

export default Note;
