import React from 'react';
import styled from 'styled-components'

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
`;

const ContainerHead = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 50vh;
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 250px);
  height: 50vh;
`;

const LeftPanel = styled.div`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

const RightPanel = styled.div`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

const TitleBloc = styled.h2`
    text-align: center;
`;

function Assiduite() {
    return (
        <GlobalContainer>
            <ContainerHead>
                <TitleBloc>Injustifié</TitleBloc><br/>
                <TableContainer>
                    <thead>
                    <tr>
                        <TableHeader>Nom</TableHeader>
                        <TableHeader>Prénom</TableHeader>
                        <TableHeader>Du</TableHeader>
                        <TableHeader>Au</TableHeader>
                        <TableHeader>Durée</TableHeader>
                        <TableHeader>Motif</TableHeader>
                        <TableHeaderMiss>Injustifiées</TableHeaderMiss>
                        <TableHeader></TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>LE GOFF</TableData>
                        <TableData>Océane</TableData>
                        <TableData>10/01/2023</TableData>
                        <TableData>13/01/2023</TableData>
                        <TableData>28h00</TableData>
                        <TableData>Maladie: AT (APP ou CPRO) ou CM (TP)</TableData>
                        <TableData>02h00</TableData>
                        <TableData>
                            <button>relancer</button>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>DEMOREST</TableData>
                        <TableData>Axel</TableData>
                        <TableData>04/01/2023</TableData>
                        <TableData>06/01/2023</TableData>
                        <TableData>21h00</TableData>
                        <TableData>Maladie: AT (APP ou CPRO) ou CM (TP)</TableData>
                        <TableData>02h00</TableData>
                        <TableData>
                            <button>relancer</button>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>21/11/2022</TableData>
                        <TableData>21/11/2022</TableData>
                        <TableData>03h30</TableData>
                        <TableData>Maladie: AT (APP ou CPRO) ou CM (TP)</TableData>
                        <TableData>01h00</TableData>
                        <TableData>
                            <button>relancer</button>
                        </TableData>
                    </TableRow>

                    </tbody>
                </TableContainer>
            </ContainerHead>

            <Container>
                <LeftPanel>
                    <TitleBloc>Répartition cumulée</TitleBloc>
                    <TableContainer>
                        <thead>
                        <tr>
                            <TableHeader>Absences</TableHeader>
                            <TableHeader>Justifiées</TableHeader>
                            <TableHeaderMiss>Injustifiées</TableHeaderMiss>
                        </tr>
                        </thead>
                        <tbody>
                        <TableRow>
                            <TableData>12h00</TableData>
                            <TableData>10H00</TableData>
                            <TableData>02h00</TableData>
                        </TableRow>

                        </tbody>
                    </TableContainer>
                </LeftPanel>

                <RightPanel>
                    <TitleBloc>Retard</TitleBloc>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui blandit, porta nibh quis, vehicula ipsum. Curabitur luctus orci eget tellus accumsan rhoncus. Fusce vel mauris vel neque pharetra consequat. Sed ac mi elit. Donec iaculis, libero quis pellentesque bibendum, erat lacus rhoncus nibh, vel blandit sapien metus sit amet felis.</p>
                </RightPanel>
            </Container>

        </GlobalContainer>
    );
}

export default Assiduite;
