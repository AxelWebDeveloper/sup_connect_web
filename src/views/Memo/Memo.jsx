import React, { useState } from 'react';
import styled from 'styled-components'
import Form from "./Input";

/**
 * Bloc-Note -> Ajout et gestion des mémo
 * @param placeholder
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
const Memo = ({ placeholder, onChange }) => {
    return (
        <GlobalContainer>
            <Container>
                <DivLeft>
                    <TitleLeft>Recents</TitleLeft>
                    <DivMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                        <NewMemo>
                            <TitleMemo>
                                {/*mettre ici les title recupe en bdd  */}
                                8 octobre 2024 Envoyer mail dadazdazdazdazdazd
                            </TitleMemo>
                            <DivButton>
                                <Btn type="button"  >Ouvrir</Btn>
                                <Btn type="button"  >Fermer</Btn>
                            </DivButton>
                        </NewMemo>
                    </DivMemo>
                </DivLeft>
                <DivRight>
                    <TitleNewMemo>
                        Écrire un nouveaux mémo
                    </TitleNewMemo>
                        <DivNewMemo>
                            <Form />
                        </DivNewMemo>
                </DivRight>
            </Container>
        </GlobalContainer>
    );
}

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
const DivLeft = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #f7f6ef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivRight = styled.div`
  width: 60%;
  background-color: #f3f2e9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleLeft = styled.h2`
  font-size: 25px;
  font-family: 'UrbanistSemiBold', sans-serif;
  display: flex;
  justify-content: center;
`;
const  DivMemo = styled.div`
  width: 80%;
  margin-bottom: 5%;
  height: 100vh;
  background-color: #f3f2e9;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  overflow-y: auto;
  border-radius: 10px;
`;

const NewMemo = styled.div`
  width: 90%;
  height: 100px;
  background-color: white;
  margin-top: 2%;
  margin-bottom: 3%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const TitleMemo = styled.p`
  margin-left: 5%;
  max-width: 90%;
  font-family: 'UrbanistSemiBold', sans-serif;
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const DivButton = styled.div`
  width: 90%;
  height: 30px;
  margin-bottom: 3%;
  margin-left: 5%;
  display: flex;
  justify-content: space-evenly;
`;
const Btn = styled.button`
  width: 30%;
  border-radius: 5px;
  padding: 0.5em 1em;
  border: 0.16em ;
  color: black;
  font-size: 13px;
  font-weight: 800;
  background-color: #f7f6ef;
`;
const TitleNewMemo = styled.h2`
  font-size: 25px;
  font-family: 'UrbanistSemiBold', sans-serif;
  display: flex;
  justify-content: center;
`;
const DivNewMemo = styled.div`
  width: 90%;
  margin-bottom: 5%;
  height: 100vh;
  background-color: #f7f6ef;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  border-radius: 10px;
`;
export default Memo;
