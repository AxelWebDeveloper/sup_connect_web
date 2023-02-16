import React from 'react';
import styled from "styled-components";
import Dashboard from "./Dashboard";

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
`

export default LayoutWrapper;
