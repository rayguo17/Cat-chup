import { useState } from "react"
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/action";



const Register = (props) =>{
    const [username,setUsername]= useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('')
    const [confirmPassword,setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const usernameOnChange = (e)=>{
        setUsername(e.target.value)
    }
    const emailOnChange = (e)=>{
        setEmail(e.target.value)
    }
    const passwordOnChange = (e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordOnChange = (e)=>{
        setConfirmPassword(e.target.value)
    }

    const onRegister = ()=>{
        dispatch(registerThunk(username,email,password))
    }
    //need to validate username
    //password confirmation sign , "two password not the same" sign
    //maybe use on keyup event listener
    return (
        <div>
            <input type="file" name="" id="" />
            <input 
            value={username}
            type="text" 
            onChange = {usernameOnChange}
            placeholder='username*'
            />
            <input 
            value={email}
            type="email" 
            onChange = {emailOnChange}
            placeholder='email*'
            />
            <input 
            value={password}
            type="password" 
            onChange = {passwordOnChange}
            placeholder='password*'
            />
            <input 
            value={confirmPassword}
            type="password" 
            onChange = {confirmPasswordOnChange}
            placeholder='confirm password*'
            />
            <button
                onClick={onRegister}
            >Register</button>
        </div>
    )
}
export default Register