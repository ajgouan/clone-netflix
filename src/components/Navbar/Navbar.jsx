import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="logo" />
                <ul>
                    <li>Acceuil</li>
                    <li>Séries</li>
                    <li>Films</li>
                    <li>Nouveautés</li>
                    <li>Ma liste</li>
                    <li>Explorer par langue</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="Search" className="icons" />
                <div className="notif-wrapper">
                    <img src={bell_icon} alt="Notification" className="icons" />
                </div>
                <div className="navbar-profile">
                    <img src={profile_img} alt="Profile" className="profile" />
                    <img src={caret_icon} alt="" />
                    <div className="dropdown">
                        <p>Sign Out of Netlix</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
