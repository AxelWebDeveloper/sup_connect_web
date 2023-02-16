import React from 'react'
import imgUser from './assets/user.jpeg'
import imgLogo from './assets/logo_fondtrans.png'
import styled from "styled-components";
import { IconName } from "react-icons/bs";
import './Dashboard.css'

const Dashboard = () => {

    return (
        <SideBar>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <DivRole class="logo">
                <Logo src={imgLogo}/>
                <Role>Enseignant</Role>
            </DivRole>

            <ul className="nav_list">

                <li>
                    <a href='#'>
                        <i class='bx bx-edit'></i>
                        <span class="links_name">Note</span>
                    </a>
                    {
                        /*<span class="tooltip">Dashboard</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-been-here'></i>
                        <span class="links_name">Absence</span>
                    </a>
                    {
                        /*<span class="tooltip">User</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-time-five'></i>
                        <span class="links_name">Retard</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-file-blank'></i>
                        <span class="links_name">Document</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-file'></i>
                        <span class="links_name">Contrat</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-edit-alt'></i>
                        <span class="links_name">Mémo</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-chat'></i>
                        <span class="links_name">Annonce</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-group'></i>
                        <span class="links_name">Classe</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
                <li>
                    <a href='#'>
                        <i class='bx bx-cog'></i>
                        <span class="links_name">Setting</span>
                    </a>
                    {
                        /*<span class="tooltip">Analytics</span>*/
                    }
                </li>
            </ul>
            <DivProfile class="profile_details">
                <ImgProfile src={imgUser} alt=''/>
                <DivUser class="name_job">
                    <Name class="name">Robin</Name>
                    <RoleUser class="job">P.O Coding Factory</RoleUser>
                </DivUser>
                <LogOut className='bx bx-log-out' id='log_out'></LogOut>
            </DivProfile>
        </SideBar>
    );
}

const SideBar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  background: #A9C1FF;
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DivRole = styled.div`
    width: 100%;
    display: flex;
  flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
`;

const Role = styled.div`
  font-size: 20px;
`;


const DivProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const ImgProfile = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 12px;
`

const DivUser = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Name = styled.div``

const RoleUser = styled.div``

const LogOut = styled.i`
  font-size: 30px;
  font-weight: lighter;
  border-radius: 12px;
`
export default Dashboard
