import { useFormik } from "formik";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/auth/action";
import * as yup from 'yup';



export const Login = (props)=>{
    
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:values=>{
            // alert(JSON.stringify(values,null,2));
            dispatch(loginThunk(values))
        },
        validationSchema:yup.object().shape({
            username:yup.string().required('Required'),
            password:yup.string().required('Required'),
        }),
        validateOnChange:false,
    })

    
    

    return (
        <div className='row mx-0 full-size'>
            <div className='col-6 px-0 cover-container'>
                
            </div>
            <div className='col-6 px-0'>

                <center >
                    <div className='logo-container ' style={{marginTop:'130px'}}>

                    </div>
                    <div className='profile-container' style={{marginTop:'30px'}}>
                        <form onSubmit={formik.handleSubmit}>
                            <input 
                                name='username' id='username'
                                type="text" 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='username'
                                className={formik.errors.username && formik.touched.username && 'error-input'}
                            />
                            {formik.errors.username && formik.touched.username && <div className='error-message'>{formik.errors.username}</div>}
                            <input 
                                name='password' id='password'
                                type="password" 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='password'
                                className={formik.errors.password && formik.touched.password && 'error-input'}
                            />
                            {formik.errors.password && formik.touched.password && <div className='error-message'>{formik.errors.password}</div>}
                            <button  type='submit' className='btn btn-outline-primary mt-3'>Login</button>
                        </form>
                    </div>
                    
                </center>
            </div>
            
        </div>
    )
}