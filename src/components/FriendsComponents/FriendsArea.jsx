import { useState } from "react";
import { useEffect } from "react";




const FriendsArea = (props) => {
    const {friendsList,activeTab}= props
    console.log('friendsList',friendsList);
    const [localFriendsList,setLocalFriendsList] = useState(friendsList);
    
    useEffect(()=>{
        console.log(friendsList);
        setLocalFriendsList(friendsList);
        
    },[friendsList])
    return (
        <div className="postContainer" style={{ backgroundColor: 'grey' }}>
            {
                localFriendsList[activeTab]?localFriendsList[activeTab].map((friends,index)=>{
                    return (
                        <div>
                            <p>
                            {localFriendsList[activeTab][index]}
                            </p>
                        </div>
                    )
                }):null
            }
            
            <div ><p>{activeTab}</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>
            <div ><p>postArea</p></div>




        </div>)
}


export default FriendsArea;