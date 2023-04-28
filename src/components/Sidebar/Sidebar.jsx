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
                        <NavLink to="/assiduite">
                            Retards et absences
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><IoNewspaperOutline color={'#fff'} size={22} /></Icon>
                        <NavLink to="/note">
                            Note
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><HiOutlineFolderOpen color={'#fff'} size={22} /></Icon>
                        <NavLink to="/document">
                            Documents
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><BsPinAngle color={'#fff'} size={22} /></Icon>
                        <NavLink to="/memo">
                            Memo
                        </NavLink>
                    </Item>
                    <Item>
                        <Icon><IoSettingsOutline color={'#fff'} size={22} /></Icon>
                        <NavLink to="/setting">
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
  background-color: rgba(33, 42, 255, 0.75);
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
    background-color: rgba(33, 42, 255, 0.20);
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
  background-color: rgba(63, 70, 236, 0.8);
  border: 1px solid rgb(40, 46, 178);
  padding: 15px 20px;
  border-radius: 10px;
  width: 80%;
  color: #fff;
  font-family: 'UrbanistRegular', sans-serif;
  font-size: 15.5px;

  &:hover {
    background-color: rgba(78, 84, 238, 0.8);
  }
`;

const Footer = styled.div`
  width: 92%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const DivRole = styled.div`
  margin-top: 20px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const ItemMenu = styled.li`
  position: relative;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  &:hover {
    background: #7299FE;
    border-radius: 12px;
    font-weight: 600;
  }
`;

const LinkItem = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  font-size: larger;
  &:hover {
    border-radius: 12px;
    font-weight: 600;
    color: white;
  }
  &:active {
    color: black;
  }
`

const TextItem = styled.span`
  margin-left: 20px;
`;

const TextHead = styled.span`
  margin-left: 10px;
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const DivProfile = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #eeeeee;
  color: red;
  border-radius: 10% 30% 0% 0%;
`;

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
  color: black;
  text-align: center;
`

const Name = styled.div`
    font-size: large;
`

const RoleUser = styled.div`
    font-size: small;
`;
export default Sidebar
