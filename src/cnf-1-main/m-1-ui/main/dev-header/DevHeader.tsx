import React from "react";
import {pages} from "../routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {DEV_VERSION} from "../../../../config";

const mappedLinks = pages.map(p => (
    <LinkNya
        key={"navLink-" + p._id}
        to={(p.path || "/error404") + (p.params ? "/1" : "")}
        info={"navLink-" + p._id}
    >
        {p.title}
    </LinkNya>
));

const DevHeader = () => {

    DEV_VERSION && console.log("render DevHeader");
    return (
        <>
            {mappedLinks}
        </>
    );
};

export default DevHeader;
