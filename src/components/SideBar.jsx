import { Link } from "react-router-dom"

const SideBar  = ()=>{
    return (
        <div>
            <h2>Cat-Chup</h2>
            <ul>
                <li>
                    <Link to='/home'>Home Page</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/friend'>Friends</Link>
                </li>
                <li>
                    <Link to='/message'>Messages</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;