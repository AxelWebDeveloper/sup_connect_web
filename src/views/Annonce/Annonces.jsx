import React from 'react';
import styled from 'styled-components'

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

const Bloc = styled.div`
  display: flex;
  justify-content: center;
`;

const Bloc2 = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleBloc = styled.h2`
  text-align: center;
`;

const Btn = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgb(255, 255, 255);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  text-align: center;
  transition: all 0.2s;
  background-color: #7299FE;
  height: 50px;
  width: 100px;
  
  &:hover {
    color: #7299FE;
    background-color: rgb(255, 255, 255);
    border: 1px solid #7399FE;
  }
`;

const InputTitre = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #7399FE;
  border-radius: 15px;
  margin-bottom: 10px;
  height: 50px;
  width: 60%;

  &:focus {
    outline: none;
    border: 3px solid #7399FE;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #7399FE;
  border-radius: 15px;
  margin-bottom: 10px;
  height: 400px;
  width: 60%;

  &:focus {
    outline: none;
    border: 3px solid #7399FE;
  }
`;

/**
 * Gestion des annonces
 * @param placeholder
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
const Annonce = ({ placeholder, onChange }) => {
    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Annonce</TitleBloc><br/>

                <Bloc>
                    <InputTitre
                        type="text"
                        placeholder="Titre de l'annonce"
                        onChange={onChange}
                    />
                </Bloc>

                <Bloc>
                    <Input
                        type="text"
                        placeholder="J'ajoute une description"
                        onChange={onChange}
                    />
                </Bloc>

                <Bloc2>
                    <Btn>
                        Ajouter
                    </Btn>
                </Bloc2>
            </Container>
        </GlobalContainer>
    );
}

export default Annonce;
