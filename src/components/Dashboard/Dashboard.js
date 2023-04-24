import React from 'react'
import imgUser from '../../assets/user.jpeg'
import imgLogo from '../../assets/logo_fondtrans.png'
import styled from "styled-components";
import {FiEdit} from "react-icons/fi";
import {BiBeenHere, BiChat, BiCog, BiTimeFive} from "react-icons/bi";
import {
    AiOutlineEdit,
    AiOutlineFile,
    AiOutlineUsergroupDelete,
} from "react-icons/ai";
import {FaFileContract} from "react-icons/fa";
import {CiLogout} from "react-icons/ci";
import {Link} from "react-router-dom";

const Dashboard = () => {

    return (
        <SideBar>
            <DivRole>
                <Logo src={imgLogo}/>
                <LinkItem to={'/'}>
                    <TextHead>SupConnect</TextHead>
                </LinkItem>
            </DivRole>

            <Menu>
                <ItemMenu>
                    <LinkItem to={'/note'}>
                        <FiEdit/>
                        <TextItem>Note</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem to={'/assiduite'}>
                        <BiBeenHere/>
                        <TextItem>Assiduité</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem to='/document'>
                        <AiOutlineFile />
                        <TextItem>Document</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem to='/memo'>
                        <AiOutlineEdit />
                        <TextItem>Mémo</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem to='/annonce'>
                        <BiChat />
                        <TextItem>Annonce</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem to='/classe'>
                        <AiOutlineUsergroupDelete />
                        <TextItem>Classe</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem to='/setting'>
                        <BiCog />
                        <TextItem>Setting</TextItem>
                    </LinkItem>
                </ItemMenu>
            </Menu>

            <DivProfile >
                <ImgProfile src={imgUser} alt=''/>
                <DivUser>
                    <Name>Robin</Name>
                    <RoleUser>P.O Coding Factory</RoleUser>
                </DivUser>
                <CiLogout/>
            </DivProfile>
        </SideBar>
    );
}

const SideBar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #A9C1FF;
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

const Logo = styled.img`
  height: 55px;
  width: 55px;
  padding: 5px;
  background: white;
  border-radius: 25%;
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
    color: #white;
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
export default Dashboard
