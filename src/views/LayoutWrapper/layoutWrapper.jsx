import React from 'react';
import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";

const LayoutWrapper = ({children}) => {
    return (
        <Body>
            <Sidebar></Sidebar>
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
