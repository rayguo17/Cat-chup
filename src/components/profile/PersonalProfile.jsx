import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt,faAt,faJedi,faEdit,faUserPlus } from "@fortawesome/free-solid-svg-icons"
import {useState} from 'react'
import { ProfileEditModal } from "./ProfileEditModal"
import { ProfilePicDiv } from "./ProfilePicDiv"


let profileBtn = {
    position:'absolute',
    right:'40px',
    bottom:"10px"
}

export const PersonalProfile = (props)=>{
    console.log('isOwner',props.isOwner);
    console.log('userInfo',props.userInfo);
    const [modalIsOpen,setOpenModal] = useState(false);
    const toggle = ()=>setOpenModal(!modalIsOpen);
    const showButton = ()=>{
        switch (true){
            case props.isOwner:
                return <button className='btn btn-primary' style={profileBtn} onClick={toggle}><FontAwesomeIcon icon={faEdit}/> edit Profile</button>;
            
            case props.isFriend:
                return <button className='btn'>cat-chup</button>;
            case props.isStranger:
                return <button className='btn' style={profileBtn}><FontAwesomeIcon icon={faUserPlus}/>add friend</button>
        }
    }

    return (
        <div style={{position:'relative', height:'330px',borderBottom:'1px solid black'}}>
            <div className='' style={{width:'100%',height:'180px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage:`url(${process.env.REACT_APP_API_SERVER+props.userInfo.bgImgPath})`}}>
                 
            </div>
            <div style={{position:'absolute',top:'100px',left:"100px"}}>
                    <ProfilePicDiv
                        imgPath={process.env.REACT_APP_API_SERVER+props.userInfo.imgPath}
                    />
                    <center style={{lineHeight:"0"}}>
                    <p className=' mb-0'><FontAwesomeIcon icon={faAt }/> {props.userInfo.username}</p>
                    {props.userInfo.city?<p className='mt-1'><FontAwesomeIcon icon={faMapMarkerAlt }/> lives in {props.userInfo.city}</p>:null}
                    </center>
            </div>
            <div className='row mt-5'>
                <div className='col-6'>
                </div>
                {props.userInfo.description?<div className='col-6'><FontAwesomeIcon icon={faJedi}/> bio: {props.userInfo.description}</div>:null}
            </div>
            <div>
                {showButton()}
            </div>
            {props.isOwner?<ProfileEditModal
                toggle={toggle}
                modalIsOpen={modalIsOpen}
                userInfo={props.userInfo}
                infoChangedState={props.infoChangedState}
            />:null}
        </div>
    )
}