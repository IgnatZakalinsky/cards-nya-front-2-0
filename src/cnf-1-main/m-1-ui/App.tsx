import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "./main/Main";
import store from "../m-2-bll/store";
import {DEV_VERSION} from "../../config";

// add context
const App = () => {

    DEV_VERSION && console.log('render App');
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
};

export default App;
