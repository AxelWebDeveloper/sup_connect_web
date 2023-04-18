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

const TitleBloc = styled.h2`
    text-align: center;
`;

const TitleSet = styled.h3`
    margin-left: 3%;
  margin-bottom: 0px;
`;

const Txt = styled.p`
    margin-left: 5%;
`;

function Setting() {
    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Paramètres utilisateur</TitleBloc><br/>

                <TitleSet>Détails du profil</TitleSet><br/>
                <Txt>
                    <p>Identifiant : Robin</p>
                    <p>Mot de passe : <button>modifier</button> </p>
                    <p>Première connexion : 24/08/2020</p>
                    <p>Dernière connexion : 17/04/2023</p>
                </Txt>

                <TitleSet>Paramètres personnels</TitleSet><br/>
                <Txt>
                    <p>LoreumIpseum : LoreumIpseum</p>
                    <p>LoreumIpseum : LoreumIpseum</p>
                    <p>LoreumIpseum : LoreumIpseum</p>
                    <p>LoreumIpseum : LoreumIpseum</p>
                </Txt>

            </Container>
        </GlobalContainer>
    );
}

export default Setting;
