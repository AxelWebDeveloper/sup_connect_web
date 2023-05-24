import React from 'react';
import styled from 'styled-components'
import { useState } from "react";
import AddDocumentPage from './AddDocumentPage';

/**
 * Gestion des documents des élèves (bulletins, certificats, ect...)
 * @returns {JSX.Element}
 * @constructor
 */
function Document() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <GlobalContainer>
            <Container>
                <DivDoc>
                    <TitleDoc>Envoyer un documment</TitleDoc>
                </DivDoc>
                <CardAdd>
                    <AddDocumentPage />
                </CardAdd>
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
  width: 98% ;
  margin: 10px;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  border-radius: 15px;
  align-items: center
  
`;

const DivDoc = styled.div`
  flex: 1;
`;

const TitleDoc = styled.h1`
  font-family: 'UrbanistSemiBold', sans-serif;
  font-weight: 600;
  font-size: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
`;

const CardAdd = styled.div`
  background-color: #AAC0FF;
  display: flex;
  margin-bottom: 22% ;
  width: 60%;
  height: 350px;
  border-radius: 20px;
`;

export default Document;
