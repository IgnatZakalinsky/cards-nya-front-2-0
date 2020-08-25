import React from "react";
import {DEV_VERSION} from "../../../../config";
import PacksContainer from "./PacksContainer";

const PacksPage = () => {

    DEV_VERSION && console.log("render PacksPage");
    return (
        <div>
            PacksPage

            <PacksContainer/>
        </div>
    );
};

export default PacksPage;
