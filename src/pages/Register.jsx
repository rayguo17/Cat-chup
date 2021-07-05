
import { useFormik } from "formik";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/action";
import * as yup from 'yup'
import axios from 'axios'
import '../stylesheet/Register.css'



const Register = (props) =>{
    const [imgUrl,setImgUrl] = useState(null);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
            file:null,
            phone:'',
            city:'',
            description:''
        },
        onSubmit:values=>{
            //alert(JSON.stringify(values,null,2));
            dispatch(registerThunk(values));
        },
        validationSchema:yup.object().shape({
            file:yup.mixed().required('please upload a picture').test('checkFileType','please choose a image file' ,function(value){
                
                if(value){
                    //console.log('type',value.type)
                    const supported_type=['image/jpeg','image/png','image/jpg']
                 let matched = supported_type.find(type=>type==value.type)
                 //console.log('matched',matched);
                 if(matched){
                     return true;
                 }else{
                     return false
                 }
                }
                
            }),
            username:yup.string().max(15,'Must be 15 cahracters or less').required('Required').test('checkNameExist','name already taken',function(value){
                return new Promise((resolve,reject)=>{
                    axios.post('http://localhost:8080/api/checkUsername',{
                        username:value
                    }).then((data)=>{
                    if(data.data){
                        resolve(true);
                    }else {
                        resolve(false)
                    }
               
                    }).catch((err)=>{
                        console.log('check username error',err);
                        reject(err);
                    })
                })
            }),
            password:yup.string().required('Required'),
            email:yup.string().email().required('Required'),
            confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Passwords must match').required('Required')
        }),
        validateOnChange:false
    })
    
    

    
    
    const fileOnChange = (e)=>{
        formik.setFieldValue('file',e.currentTarget.files[0])
        
    }
    const pictureAvatar = ()=>{
        if(formik.values.file){
            let reader = new FileReader();
            reader.onloadend = ()=>{
                setImgUrl(reader.result);
            }
            reader.readAsDataURL(formik.values.file)
            return (
                <div className='selected-avatar' style={{backgroundImage:`url(${imgUrl})`}}></div>
            )
        }else{
            return (
                <div className='default-avatar' ></div>
            )
        }
        
    }
    
    return (
        <div className='row mx-0 full-size'>
            <div className='col-6 px-0 cover-container'>

            </div>
            <div className='col-6 px-0'>
                <center className='profile-container'>
                    {pictureAvatar()}
                    <form onSubmit={formik.handleSubmit}>
                    <input type="file" 
                    onChange={fileOnChange}
                     files={formik.values.file}
                     onBlur={formik.handleBlur}
                        id='file' name='file'
                        className={formik.errors.file && formik.touched.file && 'error-input'}
                    />
                    {formik.errors.file && formik.touched.file && <div className='error-message'>{formik.errors.file}</div>}
                    <div className='row mx-0 input-form'>
                        <div className='col-6 left-input'>
                        <input 
                            name='username' id='username'
                            value={formik.values.username}
                            type="text" 
                            onChange = {formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='username*'
                            className={formik.errors.username && formik.touched.username && 'error-input'}
                        />
                        {formik.errors.username && formik.touched.username && <div className='error-message'>{formik.errors.username}</div>}
                        <input 
                            name='email' id='email'
                            value={formik.values.email}
                            type="email" 
                            onChange = {formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='email*'
                            className={formik.errors.email && formik.touched.email && 'error-input'}
                        />
                        {formik.errors.email && formik.touched.email && <div className='error-message'>{formik.errors.email}</div>}
                        <input 
                            name='password' id='password'
                            value={formik.values.password}
                            type="password" 
                            onChange = {formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='password*'
                            className={formik.errors.password && formik.touched.password && 'error-input'}
                        />
                        {formik.errors.password && formik.touched.password && <div className='error-message'>{formik.errors.password}</div>}
                        <input 
                            name='confirmPassword' id='confirmPassword'
                            value={formik.values.confirmPassword}
                            type="password" 
                            onChange = {formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='confirm password*'
                            className={formik.errors.confirmPassword && formik.touched.confirmPassword && 'error-input'}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && <div className='error-message'>{formik.errors.confirmPassword}</div>}
                        </div>
                        <div className='col-6 right-input'>
                            <input type="text" 
                                name='phone' id='phone'
                                value={formik.values.phone}
                                onChange = {formik.handleChange}
                                placeholder='phone (optional)'
                            />
                            <input type="text" 
                                name='city' id='city'
                                value={formik.values.city}
                                onChange = {formik.handleChange}
                                placeholder='city (optional)'
                            />
                            <textarea cols="23" rows="3"
                                name='description' id='description'
                                placeholder='description (optional)'
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-3'
                    >Register</button>
                    </form>
                    
                    
                </center>
            
            
            
            
            </div>
            
        </div>
    )
}
export default Register