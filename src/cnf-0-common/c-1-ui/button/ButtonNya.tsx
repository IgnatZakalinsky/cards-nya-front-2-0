import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./ButtonNya.module.css";
import {DEV_VERSION} from "../../../config";

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { info?: string };

const ButtonNya: React.FC<ButtonNyaPropsType> = React.memo((
    {
        info,
        ...props
    }
) => {

    DEV_VERSION && info && console.log('render ButtonNya-' + info);
    return <button className={s.buttonNya} {...props}/>;
});

export default ButtonNya;
