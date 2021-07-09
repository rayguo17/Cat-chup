import '../stylesheet/postArea.css'
import EventPost from './EventPost'
import Post from './Post'


const PostArea = (props) => {
    return (
        <div className="postContainer" style={{ backgroundColor: 'grey' }}>

            <Post />
            <EventPost />
     




        </div>)
}


export default PostArea;