import React from 'react';
import styled from 'styled-components';

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

const Note = () => {
    return (
        <GlobalContainer>

            <Container>
                <TitleBloc>Notes</TitleBloc><br/>
            </Container>
        </GlobalContainer>
    );
};

export default Note;
