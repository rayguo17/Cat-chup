import '../stylesheet/postArea.css'
import EventPost from './EventPost'
import Post from './Post'


const PostArea = (props) => {

    const postInfo = 
    { 
        id:1,
        userInfo:
        {
            userName:"Username",
            userIcon_url:"https://image.flaticon.com/icons/png/512/146/146005.png"
        },
        content:
        {
            caption:"Nice to create a post",
            text:"It is a good day.",
            picture:{
                name:"pic1",
                data_url:"https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale"
                    }
        }, 
        postTime: "01-07-2020 15:00:00" ,
        likeNumber: 5,
        commentsNumber: 1,
    }

    return (
        <div className="postContainer">

            <Post postInfo={postInfo} />
            <EventPost />
    
        </div>)
}


export default PostArea;