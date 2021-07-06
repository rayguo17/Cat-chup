import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt,faAt,faJedi,faEdit,faUserPlus } from "@fortawesome/free-solid-svg-icons"

let profileBtn = {
    position:'absolute',
    right:'40px',
    bottom:"10px"
}

export const PersonalProfile = (props)=>{
    console.log('isOwner',props.isOwner);
    console.log('userInfo',props.userInfo);
    const showButton = ()=>{
        switch (true){
            case props.isOwner:
                return <button className='btn btn-primary' style={profileBtn}><FontAwesomeIcon icon={faEdit}/> edit Profile</button>;
            
            case props.isFriend:
                return <button className='btn'>cat-chup</button>;
            case props.isStranger:
                return <button className='btn' style={profileBtn}><FontAwesomeIcon icon={faUserPlus}/>add friend</button>
        }
    }

    return (
        <div style={{position:'relative', height:'330px',backgroundColor:'#F5EBD5'}}>
            <div className='' style={{width:'100%',height:'180px',backgroundColor:'#5DF5CC'}}>
                 
            </div>
            <div style={{position:'absolute',top:'100px',left:"100px"}}>
                    <div style={{backgroundColor:'white',width:'150px',height:"150px",borderRadius:'50%',backgroundImage:`url(${process.env.REACT_APP_API_SERVER}${props.userInfo.imgPath})`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                        
                    </div>
                    <center style={{lineHeight:"0.4"}}>
                    <p className='mt-3'><FontAwesomeIcon icon={faAt }/> {props.userInfo.username}</p>
                    {props.userInfo.city?<p><FontAwesomeIcon icon={faMapMarkerAlt }/> lives in {props.userInfo.city}</p>:null}
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
        </div>
    )
}