import React from "react";
import {Switch, Route} from "react-router-dom";
import {PageType, pages} from "./Pages";
import {DEV_VERSION} from "../../../../config";

const mappedRoutes = pages.map((p: PageType) => (
    <Route
        key={'route-' + p.id}
        path={p.path && (p.path + (p.params || ''))}
        exact={p.exact}
        render={p.page}
    />
));

const Routes = () => {

    DEV_VERSION && console.log('render Routes');
    return (
        <Switch>
            {mappedRoutes}
        </Switch>
    );
};

export default Routes;
