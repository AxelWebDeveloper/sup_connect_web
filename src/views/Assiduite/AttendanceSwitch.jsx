import React, {useState} from 'react';
import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {TextField} from "@mui/material";
import {AiOutlineEdit} from "react-icons/ai";

const AttendanceSwitch = ({data, props}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const isAbsent = () => {
        data.isPresent = !data.isPresent;
    }

    const [hour, setHour] = useState("")

    const handleSubmit = () => {
        data.isLate = hour
        handleClose()
    }

    return (
        <DivUser>
            <UserData>{data.student.lastName}</UserData>
            <UserData>{data.student.firstName}</UserData>
            <UserData>
                {data.isLate &&
                    <DivIsLate>
                        <p>{data.isLate}</p>
                        <AiOutlineEdit onClick={handleOpen}></AiOutlineEdit>
                    </DivIsLate>
                }
                {!data.isLate &&
                    <ButtonLate onClick={handleOpen}>Retard</ButtonLate>
                }
            </UserData>
            <UserData>
                <IOSSwitch sx={{ m: 1 }} defaultChecked onChange={isAbsent} />
            </UserData>
            {open ===  true &&
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <FormHour noValidate>
                                <TextField
                                    sx={{ width: 200, textAlign: 'center'}}
                                    id="time"
                                    label="Heure d'arriver"
                                    type="time"
                                    defaultValue={data.isLate ? data.isLate : "09:30"}
                                    onChange={(e) => setHour(e.target.value)}
                                />
                                <ButtonValid onClick={handleSubmit}>Valider</ButtonValid>
                            </FormHour>
                        </Box>
                    </Modal>
                </div>
            }
        </DivUser>
    );
};

const DivUser = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  :hover {
    background: lightgray;
  }
`

const UserData = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 25%;
  height: 100%;
  align-items: center;
  border: 3px solid white;
`;

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? 'red' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const ButtonLate = styled("button")`
  width: 100px;
  border: none;
  background: #FFCA33;
  padding: 10px;
  border-radius: 20px;
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const FormHour = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const ButtonValid = styled("button")`
  border: none;
  background: lightgreen;
  height: 50px;
  width: 150px;
  :hover {
    background: #33FF5B;
  }
`

const DivIsLate = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #ffa347;
`
export default AttendanceSwitch;
