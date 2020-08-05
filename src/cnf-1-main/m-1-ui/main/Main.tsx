import React from "react";
import DevHeader from "./dev-header/DevHeader";
import Routes from "./routes/Routes";
import {DEV_VERSION} from "../../../config";

// headers, routes, footers
const Main = () => {

    DEV_VERSION && console.log('render Main');
    return (
        <>
            {DEV_VERSION && <DevHeader/>}

            <Routes/>
        </>
    );
};

export default Main;
