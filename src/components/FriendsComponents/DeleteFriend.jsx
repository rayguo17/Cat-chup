
import React, { useState } from 'react';
import '../../stylesheet/friendsPage.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteFriend = (props) => {
    const {
        buttonLabel,
        className,
        toggle,
        modal
    } = props;


    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Delete Friend</ModalHeader>
                <ModalBody>
                    Are you sure you want to Delete your Friend?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Delete Friend</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteFriend;