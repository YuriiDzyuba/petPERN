import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";


export const Context = createContext(null)



ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        devices: new DeviceStore()
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);


