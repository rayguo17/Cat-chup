import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import GlobalSearchBar from './GlobalSerachBar';





// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';

// const Example = (props) => {
//     const [activeTab, setActiveTab] = useState('1');

//     const toggle = tab => {
//       if(activeTab !== tab) setActiveTab(tab);
//     }

const FriendsHeader = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className="friendsHeaderContainer">
            <div className="TitleSearchContainer">
                <p className="FriendsTitle">Friends(no.1231)</p>


                <GlobalSearchBar />


            </div>


            <Nav tabs>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>
                        <p className="friendGroupList">All Friends</p>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>
                        <p className="friendGroupList">Family</p>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}>
                        <p className="friendGroupList" >Work</p>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}>
                        <p className="friendGroupList">School</p>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5'); }}>
                        <p className="friendGroupList">Close Friends</p>
                    </NavLink>
                </NavItem>





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





