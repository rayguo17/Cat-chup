
// import React, { useState } from 'react';
import '../../stylesheet/friendsPage.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteFriendThunk } from '../../redux/friendsList/action';
import jwtDecode from 'jwt-decode';


const DeleteFriend = (props) => {
    const {
        buttonLabel,
        friendsList,
        toggle,
        modal,
        username
    } = props;
    const dispatch = useDispatch();

    console.log("deleteFriend props:", friendsList)


    return (

        <Button color="danger" onClick={toggle}>Delete Friend</Button>

    );
}

export default DeleteFriend;