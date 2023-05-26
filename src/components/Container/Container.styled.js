import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DashboardContainer = styled.div`
  width: 100vw;
  background-color: #eeeeee;
  min-height: 100vh;
  padding-left: 270px;
  @media (max-width: 992px) {
    left: ${({showSideBar}) => (showSideBar ? "0" : "-100%")};
    padding-left: 0;
    overflow-x: scroll;
  }
`;
