import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/auth/action";



export const Login = (props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();

    const emailOnChange = (e)=>{
        setEmail(e.target.value)
    }
    const passwordOnChange = (e)=>{
        setPassword(e.target.value)
    }
    const onLogin = (e)=>{
        dispatch(loginThunk(email,password))
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <input 
                type="text" 
                value={email}
                onChange={emailOnChange}
                placeholder='email/username'
            />
            <input 
                type="password" 
                value={password}
                onChange={passwordOnChange}
                placeholder='password'
            />
            <button onClick={onLogin}>Login</button>
            
        </div>
    )
}