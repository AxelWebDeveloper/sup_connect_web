import React from 'react';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
  background-color: #EEEEEE;
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
  text-align: left;
  margin-left: 5%;
  margin-top: 5%;
`;

const Home = () => {
    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Hello, Robin 👋</TitleBloc>
            </Container>
        </GlobalContainer>
    );
};

export default Home;
