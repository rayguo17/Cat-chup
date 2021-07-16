
// import React, { useState } from 'react';
import '../../stylesheet/friendsPage.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const DeleteFriend = (props) => {
    const {
        buttonLabel,
        friendsList,
        toggle,
        modal
    } = props;

    console.log("deleteFriend props:", friendsList)


    return (

        <Button color="danger" onClick={toggle}>Delete Friend</Button>

    );
}

export default DeleteFriend;