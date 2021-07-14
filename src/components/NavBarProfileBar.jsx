import { render } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import profileIcon from '../img/profileIcon.png'
import '../stylesheet/navBar.css'
import { useState } from 'react'
import Logout from './Logout';


const NavBarProfileBar = (props) => {


    const userStore = useSelector(state => state.userInfoStore)
    const userInfo = userStore.userInfo

    console.log("this is userInfo: ", userInfo)


    // let toggle = false;
    const [toggle, setToggle] = useState(false)

    const toggleLogout = () => {
        console.log("helloWorld")
        setToggle(!toggle)

    }



    return (
        <footer className="pt-2">
            <button onClick={toggleLogout} style={{ border: "none", background: "none" }}>
                <div style={{ display: 'inline-block', width: '50px', height: '50px', backgroundImage: `url(${process.env.REACT_APP_API_SERVER + userInfo.imgPath})`, backgroundSize: "contain", borderRadius: "50px" }}>

                </div>
                <span style={{ verticalAlign: "20px", marginLeft: "10px" }}>{userInfo.username}</span>
            </button>
            {toggle && (
                <div className="logoutToggle" style={{ position: "absolute", bottom: "60px", left: "100px" }}>
                    <Logout />
                </div>
            )}
        </footer>)
}


export default NavBarProfileBar;