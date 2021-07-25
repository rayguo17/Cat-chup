import React from "react"
import catLogo from '../../img/cat-chup_logo.png'
 
 const NotExistingUserLogoBlock =()=> {
     return (

        <div className='col-9 px-0 row mx-0'style={{ justifyContent:"center"}}>
            <div className='col-9 px-0' style={{ height: "200px"}}>
                <img style={{padding:"10px",alignSelf:"center",height:"200px"}} src={catLogo} alt="catlogo"></img>

            </div>
            </div>
         
     )
 }


 export default NotExistingUserLogoBlock;