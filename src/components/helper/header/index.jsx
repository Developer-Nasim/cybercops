import React from "react";
import logo from "../../../assets/imgs/logo.svg"; 
import DownArrow from "../../../assets/imgs/down-arrow.svg";
import Notif from "../../../assets/imgs/notif.svg";  
import Avatar from "../../../assets/imgs/avatar.jfif"
import './style.css';
import UserService from "../../../services/UserService";



function Header() {
    return( 
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="logo">
                            <a href="/"><img src={logo} alt="" /></a> 
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="menus">
                            <ul>
                                <li><a href="#">playground</a></li>
                            </ul>
                            <div className="header-actions">
                                <div className="actionBtns"> 
                                    <div className="notif">
                                        <img src={Notif} alt="" />
                                    </div> 
                                </div>
                                <div className="avtar">
                                    <div className="profile-btn"> 
                                        <img className="profile-img" src={Avatar} alt="" />
                                        <img className="down-arrow" src={DownArrow} alt="" />
                                    </div>
                                    <div className="PrfileMoreMenu">
                                        <ul>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Setting</a></li>
                                            
                                            {!UserService.isLoggedIn() && ( 
                                                <li  onClick={() => UserService.doLogin()}><a href="#">Login</a></li>
                                            )}

                                            {UserService.isLoggedIn() && (
                                                <li onClick={() => UserService.doLogout()}><a href="#">Logout </a></li>
                                                // {UserService.getUsername()}
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header> 
    )
}

export default Header;