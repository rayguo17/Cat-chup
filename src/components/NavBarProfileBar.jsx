import React from 'react';
import profileIcon from '../img/profileIcon.png'
import '../stylesheet/navBar.css'


const NavBarProfileBar = (props) => {
    return (
        <footer>
            <img className='flexIconProfile' src={profileIcon} alt="ProfilePic"></img>
            <span>pass in props.Username</span>
        </footer>)
}


export default NavBarProfileBar;