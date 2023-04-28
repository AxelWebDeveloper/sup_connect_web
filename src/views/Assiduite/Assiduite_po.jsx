import React, {useState} from 'react';
import styled from 'styled-components'

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: white;
  background: #EAAA6F;
  border-radius: 15px;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["L1 Paris", "L2 Paris", "L3 Paris"];

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
  background-color: #E37878;
  
  &:hover {
    color: #E37878;
    background-color: rgb(255, 255, 255);
  }
`;

/**
 * Gestion des absences et retards côté PROF
 * @returns {JSX.Element}
 * @constructor
 */
function AssiduitePo() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Absence / Retard</TitleBloc><br/>

                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || "Classe"}
                    </DropDownHeader>
                    {isOpen && (
                        <DropDownListContainer>
                            <DropDownList>
                                {options.map(option => (
                                    <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                        {option}
                                    </ListItem>
                                ))}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>

                <TableContainer>
                    <thead>
                    <tr>
                        <TableHeader>Nom</TableHeader>
                        <TableHeader>Prénom</TableHeader>
                        <TableHeader>Retard</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    <TableRow>
                        <TableData>LE GOFF</TableData>
                        <TableData>Océane</TableData>
                        <TableData>
                            <label>
                                <input name="timeRetard" />
                            </label>
                        </TableData>
                        <TableData>
                            <Btn type="button" absent>
                                absent
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>DEMOREST</TableData>
                        <TableData>Axel</TableData>
                        <TableData>
                            <label>
                                <input name="timeRetard" />
                            </label>
                        </TableData>
                        <TableData>
                            <Btn type="button" absent>
                                absent
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>
                            <label>
                                <input name="timeRetard" />
                            </label>
                        </TableData>
                        <TableData>
                            <Btn type="button" absent>
                                absent
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>
                            <label>
                                <input name="timeRetard" />
                            </label>
                        </TableData>
                        <TableData>
                            <Btn type="button" absent>
                                absent
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>
                            <label>
                                <input name="timeRetard" />
                            </label>
                        </TableData>
                        <TableData>
                            <Btn type="button" absent>
                                absent
                            </Btn>
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>HADDOURY</TableData>
                        <TableData>Walid</TableData>
                        <TableData>
                            <label>
                                <input name="timeRetard" />
                            </label>
                        </TableData>
                        <TableData>
                            <Btn type="button" absent>
                                absent
                            </Btn>
                        </TableData>
                    </TableRow>

                    </tbody>
                </TableContainer>
            </Container>


        </GlobalContainer>
    );
}

export default AssiduitePo;
