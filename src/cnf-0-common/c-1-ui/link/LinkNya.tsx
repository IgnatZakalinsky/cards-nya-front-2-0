import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import s from "./LinkNya.module.css";
import {DEV_VERSION} from "../../../config";

export type LinkNyaPropsType = NavLinkProps & { info?: string };

const LinkNya: React.FC<LinkNyaPropsType> = React.memo((
    {
        info,
        ...props
    }
) => {

    DEV_VERSION && info && console.log('render LinkNya-' + info);
    return <NavLink className={s.link} {...props}/>;
});

export default LinkNya;
