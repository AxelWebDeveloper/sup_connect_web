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
                    <LinkItem href='#'>
                        <AiOutlineFile />
                        <TextItem>Document</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem href='#'>
                        <FaFileContract />
                        <TextItem>Contrat</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem href='#'>
                        <AiOutlineEdit />
                        <TextItem>Mémo</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem href='#'>
                        <BiChat />
                        <TextItem>Annonce</TextItem>
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <LinkItem href='#'>
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
  background: #A9C1FF;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 50px;
  width: 50px;
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
  color: white;
  position: relative;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  &:hover {
    background: #7C92DF;
    border-radius: 12px;
  }
`;

const LinkItem = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  font-size: larger;
`

const TextItem = styled.span`
    margin-left: 20px;
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
  background: #7C92DF;
  color: white;
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
  color: white;
`

const Name = styled.div`
    font-size: large;
`

const RoleUser = styled.div`
    font-size: small;
`;
export default Dashboard
