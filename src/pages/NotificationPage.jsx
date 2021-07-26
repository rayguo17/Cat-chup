
// import SideBar from "../components/SideBar";
// import { Container, Row, Col } from 'reactstrap';
import NotificationHeader from "../components/NotificationComponents/NotificationHeader";


import ScheduleRightBar from "../components/ScheduleRightBar"
import '../stylesheet/navBar.css'
import '../stylesheet/notificationPage.css'
import { FriendRequestNotiCard } from '../components/NotificationComponents/FriendRequestNotiCard'
import NotificationBody from "../components/NotificationComponents/NotificationBody";
import { useState } from "react";
import { LikedNotiCard } from "../components/NotificationComponents/LikedNotiCard";
import { CommentNotiCard } from "../components/NotificationComponents/CommentNotiCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ScehduleRightBarPerosnal from "../components/ScheduleRightBarPersonal";
import { EventNotiCard } from "../components/NotificationComponents/EventNotiCard";
import WeekIcon from "../components/WeekIcon";
import { MyscheduleButton } from "../components/ScheduleComponents/MyScheduleButton";
import { clearAllNotiAction } from "../redux/real_time_noti/action";
// import FriendsArea from "../components/FriendsComponents/FriendsArea";
// import { useEffect } from "react";



const NotificationPage = () => {
    const notiStore = useSelector(state => state.notiListStore)
    const [notiList, setNotiList] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        //console.log('inside notification page',notiStore.notiList);
        setNotiList(notiStore.notiList);
    }, [notiStore])
    useEffect(()=>{
        dispatch(clearAllNotiAction());
    },[])
    return (
        <div className="col-9 px-0 mx-0 row">
            <div className="col-9 px-0">
                <NotificationHeader />
                {
                    notiList.map((noti, index) => {
                        if (noti.type === 'friend_request') {
                            return <FriendRequestNotiCard
                                key={noti.id}
                                noti={noti}
                            />
                        }
                        if (noti.type === 'like'){
                            return <LikedNotiCard
                                noti={noti}
                                key={noti.id}
                            />
                        }
                        if(noti.type === 'comment'){
                            return <CommentNotiCard
                                noti={noti}
                                key={noti.id}
                            />
                        }
                        if(noti.type==='join_event'){
                            return <EventNotiCard
                                noti={noti}
                                key={noti.id}
                            />
                        }
                    })
                }
                {/* <NotificationBody /> */}

                {/* <LikedNotiCard/>
                <CommentNotiCard/> */}
                {/* <EventNotiCard/> */}
            </div>
            <div className='col-3 px-0 style={{ maxHeight: "100vh" }}'>
            <ScehduleRightBarPerosnal />
        

            </div>
        </div>
    )
}


export default NotificationPage;