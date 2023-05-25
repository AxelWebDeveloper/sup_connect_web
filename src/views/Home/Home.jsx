import React, {useState} from 'react';
import styled from 'styled-components';
import {Image} from "react-bootstrap";
import CustomSelectComponent from "./CustomSelectComponent";
import Calendar from "./Calendar";
import Stat from "../../assets/stat.png"
import logo from "../../assets/dashboard-logo.png";

/**
 * Dashboard
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {

    return (
        <>
            <GlobalContainer>
            <Container>
                <DivGauche>
                <TitleBloc>Hello, Robin 👋</TitleBloc>
                    <DivStat>
                        <StatG>
                            <TitleStat>
                                Statistics
                            </TitleStat>
                            <LogoStat src={Stat} alt="Logo" width='25%'></LogoStat>
                        </StatG>
                        <StatD>
                            <Stat1>
                                <SubTitleStat>
                                    Nombre d'élèves
                                </SubTitleStat>
                                <NumStat>
                                    1340
                                </NumStat>
                            </Stat1>
                            <Stat2>
                                <SubTitleStat>
                                    Moyenne école
                                </SubTitleStat>
                                <NumStat>
                                    14,3
                                </NumStat>
                            </Stat2>
                            <Stat3>
                                <SubTitleStat>
                                    Absence moyenne
                                </SubTitleStat>
                                <NumStat>
                                    13
                                </NumStat>
                            </Stat3>
                        </StatD>
                    </DivStat>
                </DivGauche>
                <DivDroite>
                    <DivDroiteColumn>
                        <DivDriteHaut>
                            <CustomSelectComponent />
                        </DivDriteHaut>
                        <DivDroiteBas>
                            <Calendar />
                        </DivDroiteBas>
                    </DivDroiteColumn>
                </DivDroite>
            </Container>
        </GlobalContainer>
        </>
    );
};

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eeeeee;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 98% ;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

const TitleBloc = styled.h2`
  text-align: left;
  margin-left: 5%;
  margin-top: 5%;
`;

const DivGauche = styled.div`
  width: 70%;
`;

const DivDroite = styled.div`
  width: 30%;
  background-color: rgba(238, 238, 238, 0.15);
`;

const DivDroiteColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivDriteHaut = styled.div`
  width: 100%;
  padding-top: 10%;
`;

const DivDroiteBas = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 95%;
`;

const DivStat = styled.div`
  display: flex;
  justify-content: center;
  width: 98%;
  height: 680px;
`;

const StatG = styled.div`
  width: 48%;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const StatD = styled.div`
  width: 48%;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleStat = styled.h2`
  font-size: 23px;
  padding-left: 5%;
`;
const LogoStat = styled.img`
  margin-top: 20%;
  width: 390px;
  `;
const Stat1 = styled.div`
  width: 90%;
  height: 100px;
  background-color: #0267FF;
  border-radius: 20px;
  margin-top: 10%;
  margin-left: 10%;

`;
const Stat2 = styled.div`
  width: 90%;
  height: 100px;
  background-color: #c97af2;
  border-radius: 20px;
  margin-top: 10%;
  margin-left: 10%;

`;
const Stat3 = styled.div`
  width: 90%;
  height: 100px;
  background-color: #0f062b;
  border-radius: 20px;
  margin-top: 10%;
  margin-left: 10%;
`;
const SubTitleStat = styled.h3`
  font-size: 17px;
  padding-left: 10px;
  color: white;
`;
const NumStat = styled.h4`
  color: white;
  padding-left: 10px;
  font-size: 30px;
  margin-top: -3%;
`;
export default Home;
