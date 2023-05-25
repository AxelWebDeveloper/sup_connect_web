import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 15px;
  margin-right: 40px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const CardClassHead = styled.div`
  width: 100%;
  height: 30%;
  background-color: rgba(33, 42, 255, 0.75);
  border-radius: 15px 15px 0 0;
`;

export const CardClassBody = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    text-align: center;
    color: #b0b0b0;
  }
`;

export const StudentsDetails = styled.button`
  font-weight: bold;
  font-family: 'UrbanistSemiBold', sans-serif;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 1.5px solid rgba(57, 60, 140, 0.75);
  background-color: #fff;
`;
