
import SideBar from "../components/SideBar";
import { Container, Row, Col } from 'reactstrap';
import NotificationHeader from "../components/NotificationComponents/NotificationHeader";


import ScheduleRightBar from "../components/ScheduleRightBar"
import '../stylesheet/navBar.css'
import '../stylesheet/notificationPage.css'
import {FriendRequestNotiCard} from '../components/NotificationComponents/FriendRequestNotiCard'
import NotificationBody from "../components/NotificationComponents/NotificationBody";
import { useState } from "react";
import { LikedNotiCard } from "../components/NotificationComponents/LikedNotiCard";
import { CommentNotiCard } from "../components/NotificationComponents/CommentNotiCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import FriendsArea from "../components/FriendsComponents/FriendsArea";
// import { useEffect } from "react";



const NotificationPage = () => {
    const notiStore = useSelector(state=>state.notiListStore)
    const [notiList,setNotiList] = useState([]);
    useEffect(()=>{
        //console.log('inside notification page',notiStore.notiList);
        setNotiList(notiStore.notiList);
    },[notiStore])
    return (
        <div className="col-9 px-0 mx-0 row">
            <div className="col-6 px-0">
                <NotificationHeader />
                {
                    notiList.map((noti,index)=>{
                        if(noti.type==='friend_request'){
                            return <FriendRequestNotiCard
                                key={noti.created_at}
                                noti={noti}
                            />
                        }
                    })
                }
                {/* <NotificationBody /> */}
                
                {/* <LikedNotiCard/>
                <CommentNotiCard/> */}
            </div>
            <div className='col-3 px-0'>
                
            </div>
        </div>
    )
}


export default NotificationPage;