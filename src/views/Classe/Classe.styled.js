import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: 'AvenirRoman', sans-serif;
`;

export const ListClasses = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 20px;
`;

export const CardClass = styled.div`
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

export const TableContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 20px 0;
  height: 800px;
`;

export const AddStudentButton = styled.button`
  border-radius: 10px;
  padding: 15px 20px;
  background-color: rgba(33, 42, 255, 0.75);
  border: 1px solid rgb(40, 46, 178);
  color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:hover {
    background-color: rgba(33, 42, 255, 0.70);
  }
`;

export const TableHeader = styled.th`
  color: black;
  padding: 10px;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #F5F5F5;
  }
`;

export const TableData = styled.td`
  padding: 5px;
`;

export const TitleBloc = styled.h2`
  text-align: center;
`;
export const TitlePopup = styled.h3`
  text-align: center;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgb(255, 255, 255);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  text-align: center;
  transition: all 0.2s;
  background-color: #7299FE;

  &:hover {
    color: #7299FE;
    background-color: rgb(255, 255, 255);
  }
`;
