import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback} from "react";
import s from "./InputNya.module.css";
import {DEV_VERSION} from "../../../config";

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChangeText?: (value: string) => void;
    onChangeChecked?: (checked: boolean) => void;

    info?: string;
};

const InputNya: React.FC<InputNyaPropsType> = React.memo((
    {
        onChange, onChangeText, onChangeChecked,

        info,
        ...props
    }
) => {
    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeText && onChangeText(e.currentTarget.value);
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }, [onChange, onChangeText, onChangeChecked]);

    DEV_VERSION && info && console.log("render InputNya-" + info);
    return (
        <input
            onChange={onChangeCallback}

            className={s.inputNya}
            {...props}
        />
    );
});

export default InputNya;
