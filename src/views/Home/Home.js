import React, {useState} from 'react';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 250px);
  height: 100vh;
  background-color: #eeeeee;
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

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: white;
  border: none;
  border-radius: 20px;
  padding: 20px;
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TitleBloc = styled.h2`
  text-align: left;
  margin-left: 5%;
  margin-top: 5%;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CalendarDay = styled.div`
  width: 14.28%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: ${({ isToday }) => (isToday ? "#f8f8f8" : "transparent")};
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
`;

const Home = () => {
    const [today] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const days = [];
    const daysCount = daysInMonth(today.getMonth(), today.getFullYear());
    const firstDay = firstDayOfMonth(today.getMonth(), today.getFullYear());
    for (let i = 1; i <= firstDay; i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysCount; i++) {
        days.push(new Date(today.getFullYear(), today.getMonth(), i));
    }

    const handleDayClick = (day) => {
        setSelectedDate(day);
    };

    return (
        <GlobalContainer>
            <Container>
                <TitleBloc>Hello, Robin 👋</TitleBloc>
                <DashboardContainer>
                    <CardContainer>
                        <Card style={{background:"#CAA9FF"}}>
                            <CardText>68 %</CardText>
                            <CardTitle>Grammar</CardTitle>
                        </Card>
                        <Card style={{background:"#A9C1FF"}}>
                            <CardText>84 %</CardText>
                            <CardTitle>Listenning</CardTitle>
                        </Card>
                        <Card style={{background:"#FFF6C7"}}>
                            <CardText>87 %</CardText>
                            <CardTitle>Speaking</CardTitle>
                        </Card>
                    </CardContainer>
                    <CardContainer>
                        <Card style={{background:"#F9DEC5"}}>
                            <CardTitle>Progress</CardTitle>
                            <CardText>Aucun événement récent</CardText>
                        </Card>
                        <Card style={{background:"#F9C5C5"}}>
                            <CardTitle>Blakrgvrjrj</CardTitle>
                            <CardText>Aucun événement récent</CardText>
                        </Card>
                    </CardContainer>
                    <CardContainer>
                        <>
                            <h1>{monthNames[today.getMonth()]}</h1>
                            <CalendarWrapper>
                                {days.map((day, index) => (
                                    <CalendarDay
                                        key={index}
                                        isToday={day && day.toDateString() === today.toDateString()}
                                        onClick={() => handleDayClick(day)}
                                    >
                                        {day ? day.getDate() : ""}
                                    </CalendarDay>
                                ))}
                            </CalendarWrapper>
                            {selectedDate && (
                                <p>Selected date: {selectedDate.toDateString()}</p>
                            )}
                        </>
                    </CardContainer>
                </DashboardContainer>
            </Container>
        </GlobalContainer>
    );
};

export default Home;
