import React from "react";
import {DEV_VERSION} from "../../../../config";
import CardsContainer from "./CardsContainer";

const CardsPage = () => {

    DEV_VERSION && console.log('render CardsPage');
    return (
        <div>
            PacksPage

            <CardsContainer/>
        </div>
    );
};

export default CardsPage;
