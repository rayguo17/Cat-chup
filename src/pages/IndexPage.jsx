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
                <div className='logo-container'>
                    
                </div>
                <div className='button-container'>
                    <button>
                        <Link to='/login'>Login</Link>
                    </button>
                    <br/>
                    <button>
                        <Link to='/register'>Register</Link>
                    </button>
                </div>
            </center>
            </div>
        </div>
    )
}