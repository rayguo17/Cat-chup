import React from 'react';
import profileIcon from '../img/profileIcon.png'
import '../stylesheet/navBar.css'


const NavBarProfileBar = (props) => {
    return (
        <footer className='flexIconProfile'>
            <img src={profileIcon} alt="ProfilePic"></img>
            <p>pass in props.Username</p>
        </footer>)
}


export default NavBarProfileBar;