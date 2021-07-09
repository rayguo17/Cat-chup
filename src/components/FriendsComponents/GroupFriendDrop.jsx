import Dropdown from 'react-dropdown'
import { useState } from 'react';


export const GroupFriendDrop = ()=>{
    const option=['one','two','three'];
    


    return (
        <div>
            <Dropdown
                options={option}
                
                placeholder="..." 
                
            />
        </div>
    )

}
