import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import logo from '../../assets/dashboard-logo.png';
import { RxDashboard } from 'react-icons/rx';
import {IoSchoolOutline, IoLogOutOutline, IoSettingsOutline, IoNewspaperOutline} from 'react-icons/io5';
import { HiOutlineFolderOpen, HiOutlineUsers } from 'react-icons/hi2';
import { BsPinAngle } from 'react-icons/bs';
import {
    AiOutlineEdit,
    AiOutlineFile,
    AiOutlineUsergroupDelete,
    BiBeenHere,
    BiChat,
    BiCog, CiLogout,
    FiEdit, GrNotes
} from "react-icons/all";

/**
 * Menu vertical
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = () => {
    return (
        <SideBarContainer>
            <StickyContainer>
                <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '0 35px' }}>
                    <NavLink to="/">
                        <Logo src={logo} alt="Logo" width='25%'></Logo>
                    </NavLink>
                </div>
                <NavItems>
                    <Item>
                        <Icon><RxDashboard color={'#fff'} size={22} /></Icon>
                        <NavLink to="/">
                            Tableau de bord
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><HiOutlineUsers color={'#fff'} size={22} /></Icon>
                        <NavLink to="/classes">
                            Les classes
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><IoSchoolOutline color={'#fff'} size={22} /></Icon>
                        <NavLink to="/">
                            Retards et absences
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><IoNewspaperOutline color={'#fff'} size={22} /></Icon>
                        <NavLink to="/">
                            Note
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><HiOutlineFolderOpen color={'#fff'} size={22} /></Icon>
                        <NavLink to="/">
                            Documents
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><BsPinAngle color={'#fff'} size={22} /></Icon>
                        <NavLink to="/">
                            Memo
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><IoSettingsOutline color={'#fff'} size={22} /></Icon>
                        <NavLink to="/">
                            Paramètres
                        </NavLink>
                    </Item>
                </NavItems>
                <Footer>
                    <LogOut>
                        <IoLogOutOutline color={'#fff'} size={21} />
                        Se déconnecter
                    </LogOut>
                </Footer>
            </StickyContainer>
        </SideBarContainer>
    );
}

const SideBarContainer = styled.div`
  width: 270px;
  z-index: 1;
  background-color: #7299FE;
  position: fixed;
  left: 0;
  height: 100%;
  @media (max-width: 992px) {
    left: ${({showSideBar}) => (showSideBar ? "0" : "-100%")};
    transition: ${({showSideBar}) => (showSideBar ? "450ms" : "850ms")};
  }
`;

const StickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  top: 0;
  height: 100%;
`;

const Logo = styled.img`
    margin-top: 30px;
    border-radius: 5px;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 75%;
  width: 100%;
  margin-top: 80px;
  padding: 0;

  p {
    margin: 0;
  }
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 25px 0;
  margin: 0;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    background-color: #A9C1FF;
    border-radius: 15px;
    padding: 1em;
  }
`;

const Icon = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`;

const NavLink = styled(Link)`
    font-family: 'UrbanistRegular', sans-serif;
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
    border-radius: 10px;
    font-size: 16.5px;
    color: #fff;
    width: 70%;
    text-decoration: none;
`;

const LogOut = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-evenly;
  background-color: rgba(78, 84, 238, 0.8);
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  width: 80%;
  color: #fff;
  font-family: 'UrbanistRegular', sans-serif;
  font-size: 15.5px;

  &:hover {
    background-color: #AAC1FF;
  }
`;

const Footer = styled.div`
  width: 92%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export default Sidebar
