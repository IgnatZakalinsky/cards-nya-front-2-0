import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./InputNya.module.css";
import {DEV_VERSION} from "../../../config";

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { info?: string };

const InputNya: React.FC<InputNyaPropsType> = React.memo((
    {
        info,
        ...props
    }
) => {

    DEV_VERSION && info && console.log('render InputNya-' + info);
    return <input className={s.inputNya} {...props}/>;
});

export default InputNya;
