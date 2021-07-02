import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import SideBar from "../components/SideBar";

export const ContentPage = ()=>{
    return (
        <div>
        <BrowserRouter>
            <SideBar/>
            <Switch>
                <Route path='/home' render={()=><p>this is home</p>}/>
                <Route path='/messages' render={()=><p>this is messages</p>}/>
                <Route path='/friends' render={()=><p>this is friends</p>}/>
                <Route path='/:username' render={()=><p>this is username</p>}/>
            </Switch>
        
        
        </BrowserRouter>
    </div>
    )
    
}

