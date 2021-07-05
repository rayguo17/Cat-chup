import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { ContentPage } from "./ContentPage"
import { IndexPage } from "./IndexPage"
import { Login } from "./Login"
import Register from "./Register"
import HomePage from "./HomePage"

// const PrivateRoute = ({component,...rest})=>{
//     const auth = useSelector(state => state.authStore);
//     const {isAuthenticated} = auth;
//     const Component = component;
//     console.log('rendering data')
//     if(Component!=null){
//         console.log('component exist',Component)
//         console.log('auth',isAuthenticated)
//         return (
//             <Route
//                 {...rest}
//                 render = {(props)=>{
//                     return isAuthenticated?(
//                         <Component {...props}/>
//                     ):(
//                         <Redirect 
//                             to={{
//                                 pathname:'/login',
//                                 state:{from:props.location},
//                             }}

//                         />
//                     )
//                 }}           

//             />
//         )
//     }else{
//         return null;
//     }
// }
//public Route, for login/ register/indexpage, only if they are not login, can go to this page
// const PublicRoute = ({component,...rest})=>{
//     const auth = useSelector(state => state.authStore);
//     const {isAuthenticated} = auth;
//     const Component = component;
//     console.log('rendering data')
//     if(Component!=null){
//         console.log('component exist',Component)
//         console.log('auth',isAuthenticated)
//         return (
//             <Route
//                 {...rest}
//                 render = {(props)=>{
//                     return (!isAuthenticated)?(
//                         <Component {...props}/>
//                     ):(
//                         <Redirect 
//                             to={{
//                                 pathname:'/secret',
//                                 state:{from:props.location},
//                             }}

//                         />
//                     )
//                 }}           

//             />
//         )
//     }else{
//         return null;
//     }
//   }

//TODO: set index/login/register as public route, so after login would auto redirect
const LandingPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={IndexPage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/:content' component={ContentPage} />
                    <Route path='/:home' component={HomePage} />
                </Switch>


            </BrowserRouter>
        </div>
    )
}

export default LandingPage