import cover from '../img/cover.jpg'
import { Link } from 'react-router-dom'
import '../stylesheet/IndexPage.css'

export const IndexPage = ()=>{
    return (
        <div className='row mx-0 full-size'>

            
            <div className='col-6 px-0 cover-container'>
                
                
            </div>
            <div className='col-6 px-0'>
            <center>
                <div className='logo-container' style={{marginTop:'130px'}}>
                    
                </div>
                <div className='button-container' style={{marginTop:'30px'}}>
                    <button className='btn btn-primary btn-large' style={{width:'200px'}}>
                        <Link to='/login' style={{textDecoration:'none', color:'white',width:'100%',display:'inline-block'}}>Login</Link>
                    </button>
                    <br/>
                    <button className='btn btn-primary btn-large mt-3' style={{width:'200px'}}>
                        <Link to='/register' style={{textDecoration:'none',color:'white',width:'100%',display:'inline-block'}}>Register</Link>
                    </button>
                </div>
            </center>
            </div>
        </div>
    )
}