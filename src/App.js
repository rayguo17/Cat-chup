import { ChatEngine } from 'react-chat-engine';
import { Provider } from 'react-redux';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './redux/store';
import './App.css';


const App = () => {
    return (
        <Provider
            store={store}>
            <LandingPage />
        </Provider>
        // <LandingPage/>
        // <ChatEngine
        //     height='100vh'
        //     projectID='5702389c-7f43-4bee-9a9b-e5cd34312005'
        //     userName='ray'
        //     userSecret='12345'
        // />
    )
}

export default App;