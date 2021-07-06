import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EmojiPicker from './EmojiPicker';
import '../stylesheet/whatsOnYourMind.css'
import PostEmoji from '../img/post_smile-emoji_icon.png'
import Incognito from '../img/incognitoIcon.png'
import MoodIcon from '../img/moodIcon.png'
import EventsIcon from '../img/eventsIcon.png'



import UploadImage from '../img/upload_imageIcon.png'
import UploadImages from './UploadImage';



import UploadVideo from '../img/upload_videoIcon.png'

const WhatsOnYourMind = (props) => {
    //modal 
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    }
    // const toggleAll = () => {
    //     setNestedModal(!nestedModal);
    //     setCloseAll(true);
    // }

    //dropdownbutton
    const [dropdownOpen, setOpen] = useState(false);

    const toggleDrop = () => setOpen(!dropdownOpen);

    return (
        <div className="whatsOnYourMindContainer">
            <Button className="whatsOnYourMindButton" onClick={toggle}>What's on your mind,username?</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader className="postModalHeader" toggle={toggle}><span>profile component</span>     POST</ModalHeader>
                <ModalBody >
                    <div  >
                        <input className="postModalComment" placeholder="What's on your mind, Username?"></input>
                    </div>
                    <div className="postModalTagsContainer">
                        <p className="tagsFont">Tags:</p><input placeholder="#tags" className="postModalTags"></input>
                    </div>
                    <div >
                        <div placeholder="add to your post" className="postModalTags"><p>add to your post</p>

                            <img src={MoodIcon} alt="moodIcon"></img>
                            <img src={Incognito} alt="incognitoIcon"></img>
                            <img src={EventsIcon} alt="eventsIcon"></img>

                            {/* <Button color="success" onClick={toggleNested}>:)</Button> */}



                            {/* dropdown for emoji picker */}
                            <ButtonDropdown className="postEmojiDropdown" isOpen={dropdownOpen} toggle={toggleDrop}>
                                <DropdownToggle caret>
                                    <img src={PostEmoji} alt="postEmoji"></img>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem><EmojiPicker /></DropdownItem>

                                </DropdownMenu>
                            </ButtonDropdown>





                            <img src={UploadImage} alt="uploadImage"></img>
                            <UploadImages />




                            <img src={UploadVideo} alt="uploadVideo"></img>





                        </div>
                    </div><br />

                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>

                        <EmojiPicker />




                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>POST</Button>{' '}

                </ModalFooter>
            </Modal>
        </div>
    );
}

export default WhatsOnYourMind;



// original version modal pop up
// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const ModalExample = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);
//   const [nestedModal, setNestedModal] = useState(false);
//   const [closeAll, setCloseAll] = useState(false);

//   const toggle = () => setModal(!modal);
//   const toggleNested = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(false);
//   }
//   const toggleAll = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(true);
//   }

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           <br />
//           <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
//           <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
//             <ModalHeader>Nested Modal title</ModalHeader>
//             <ModalBody>Stuff and things</ModalBody>
//             <ModalFooter>
//               <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
//               <Button color="secondary" onClick={toggleAll}>All Done</Button>
//             </ModalFooter>
//           </Modal>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default ModalExample;




//popup for button dropdown
// import React, { useState } from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const Example = (props) => {
//   const [dropdownOpen, setOpen] = useState(false);

//   const toggle = () => setOpen(!dropdownOpen);

//   return (
//     <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle caret>
//         Button Dropdown
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Header</DropdownItem>
//         <DropdownItem disabled>Action</DropdownItem>
//         <DropdownItem>Another Action</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Another Action</DropdownItem>
//       </DropdownMenu>
//     </ButtonDropdown>
//   );
// }

// export default Example;