import React, { useState } from 'react';
import { useEffect } from 'react';
import EditGroupIcon from '../../img/editGroupIcon.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditFriendGroup = (props) => {

    const [modal, setModal] = useState(false);



    const toggle = () => setModal(!modal);
    const {
        buttonLabel,
        friendsList,
        activeTab,
        className
    } = props;





    // console.log('friendList in modal', friendList)
    console.log('EditGroup', friendsList);
    // const [friendGroup, setFriendGroup] = useState(friendsList);


    // useEffect(() => {
    //     console.log(friendsList);
    //     setLocalFriendsList(friendsList);

    // }, [friendsList])

    return (
        <div>
            <Button className="editGroupButton"  ><img className="editGroupIcon" src={EditGroupIcon} alt="EditGroupIcon" onClick={toggle} /></Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{activeTab}</ModalHeader>
                <ModalBody>



                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


// const editGroupClicked = () => {
//     console.log("clicked")
// }


// const EditFriendGroup = () => {
//     return (

//         <button className="editGroupButton" ><img className="editGroupIcon" src={EditGroupIcon} alt="EditGroupIcon" onClick={editGroupClicked} />
//         </button>


//     )

// }


export default EditFriendGroup;