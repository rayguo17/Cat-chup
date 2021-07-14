import { faComment, faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import userAvatar from '../../img/profileIcon.png';

export const CommentNotiCard = ()=>{


    return (
        <Link to='#' style={{textDecoration:'none',color:'black'}} >
            <div style={{backgroundColor:'#E3E3E3',paddingBottom:'5px',border:'1px solid #303030'}} className='row mx-0'>
            <div className='col-1 px-0 pt-2'>
                <FontAwesomeIcon icon={faComment}/>
            </div>
            <div className='col-2 px-0'>
                <div className='profileImgContainer' style={{width:'50px',height:'50px', backgroundImage:`url(${userAvatar})`,backgroundSize:'contain'}}></div>
                <div>Username</div>
            </div>
            <div className='col-7 px-0'>
                <p>Somebody commented your post</p>
                
                
            </div>
            <div className='col-2 px-0'>
                2021.6.21
            </div>
        </div>
        </Link>
    )
}