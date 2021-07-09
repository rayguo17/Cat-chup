import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import GlobalSearchBar from './GlobalSerachBar';
import { GroupFriendDrop } from './GroupFriendDrop';
import { useEffect } from 'react';
import { FriendsPresetGroup } from './FriendsPresetGroup';





// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';

// const Example = (props) => {
//     const [activeTab, setActiveTab] = useState('1');

//     const toggle = tab => {
//       if(activeTab !== tab) setActiveTab(tab);
//     }

const FriendsHeader = (props) => {
    const { activeTab, toggle, friendsList } = props;
    const [presetGroup, setPresetGroup] = useState([]);

    useEffect(() => {
        let newPresetGroup = Object.keys(friendsList);
        newPresetGroup.splice(5);
        setPresetGroup(newPresetGroup);
    }, [friendsList])
    return (
        <div className="friendsHeaderContainer">
            <div className="TitleSearchContainer">
                <p className="FriendsTitle">Friends(no.1231)</p>


                <GlobalSearchBar />


            </div>


            <Nav tabs style={{ position: 'relative' }}>
                {
                    presetGroup.map((group, index) => {
                        return (
                            <FriendsPresetGroup
                                toggle={toggle}
                                activeTab={activeTab}
                                group={group}
                                key={group}
                            />
                        )
                    })
                }

                <div style={{ position: 'absolute', right: '0px' }}>
                    <GroupFriendDrop
                        friendsList={friendsList}
                    />
                </div>




            </Nav>

        </div>


    )
}


export default FriendsHeader;


{/* <div className="friendGroupListContainer">
                <ButtonGroup >
                    <Button className="friendGroupList">All Friends</Button>
                    <Button className="friendGroupList">Family</Button>
                    <Button className="friendGroupList">Work</Button>
                    <Button className="friendGroupList">School</Button>
                    <Button className="friendGroupList">Close Friends</Button>
                </ButtonGroup>
            </div> */}





