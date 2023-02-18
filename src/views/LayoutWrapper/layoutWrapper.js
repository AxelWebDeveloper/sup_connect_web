import React from 'react';
import styled from "styled-components";
import Dashboard from "../../components/Dashboard/Dashboard";

const LayoutWrapper = ({children}) => {
    return (
        <Body>
            <Dashboard></Dashboard>
            {children}
        </Body>
    );
};

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export default LayoutWrapper;
