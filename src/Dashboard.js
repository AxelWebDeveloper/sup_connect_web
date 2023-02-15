import React, { useState } from 'react'
import './Dashboard.css'
import imgUser from './assets/user.jpeg'
import imgLogo from './assets/logo_fondtrans.png'

const Dashboard = () => {
    const [showSideBar, setShowSideBar] = useState(true);
    let btn = document.querySelector("#btn")
    let sidebar = document.querySelector(".sidebar")
    let searchBtn = document.querySelector(".bx-search")

    function onClick(){
        setShowSideBar(!showSideBar);
    }

  return (
    <>
    <head>
        <title>Side Bar</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    </head>

    <body>
        {
            showSideBar && (
                <div class="sidebar">
            <div class="logo_content">
                <div class="logo">
                    <div class="sideBarImgLogo">
                        <img src={imgLogo} alt='' width="50" height="50"></img>
                    </div>
                    <div class="logo_name">Enseignant</div>
                </div>

                <i class='bx bx-menu' id='btn' onClick={onClick}></i>
                <ul class="nav_list">
                    <li>
                        <a href='#'>
                            <i class='bx bx-search' ></i>
                            <input type="text" placeholder="Search..."></input>
                        </a>
                        {
                            /*<span class="tooltip">Search</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-edit' ></i>
                            <span class="links_name">Note</span>
                        </a>
                        {
                            /*<span class="tooltip">Dashboard</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-been-here' ></i>
                            <span class="links_name">Absence</span>
                        </a>
                        {
                            /*<span class="tooltip">User</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-time-five' ></i>
                            <span class="links_name">Retard</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-file-blank' ></i>
                            <span class="links_name">Document</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-file' ></i>
                            <span class="links_name">Contrat</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-edit-alt' ></i>
                            <span class="links_name">Mémo</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-chat' ></i>
                            <span class="links_name">Annonce</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-group' ></i>
                            <span class="links_name">Classe</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                    <li>
                        <a href='#'>
                            <i class='bx bx-cog' ></i>
                            <span class="links_name">Setting</span>
                        </a>
                        {
                            /*<span class="tooltip">Analytics</span>*/
                        }
                    </li>
                </ul>
                <div class="profile_content">
                    <div class="profile">
                        <div class="profile_details">
                            <img src={imgUser} alt=''/>
                            <div class="name_job">
                                <div class="name">Robin</div>
                                <div class="job">P.O Coding Factory</div>
                            </div>
                            <div>
                                <i class='bx bx-log-out' id='log_out'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }


        <div class="home_content">
            <div class="text">Note</div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                </tr>
            </table>
        </div>
    </body>



        
    </>
  )
}

export default Dashboard