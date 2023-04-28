import React from 'react';
import * as styled from './Container.styled';
import Sidebar from "../Sidebar/Sidebar";

const Container = ({ children }) => {
    return (
        <styled.Wrapper>
            <Sidebar />
            <styled.DashboardContainer>
                {children}
            </styled.DashboardContainer>
        </styled.Wrapper>
    );
};

export default Container;
