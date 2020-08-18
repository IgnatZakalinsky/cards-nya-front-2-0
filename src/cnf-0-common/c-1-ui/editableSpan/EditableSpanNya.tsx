import React, {DetailedHTMLProps, HTMLAttributes, FocusEvent, useCallback, useState} from "react";
import s from "./EditableSpanNya.module.css";
import {DEV_VERSION} from "../../../config";
import InputNya, {InputNyaPropsType} from "../input/InputNya";

export type SpanNyaPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type EditableSpanNyaPropsType = InputNyaPropsType & {
    spanProps?: SpanNyaPropsType;
};

const EditableSpanNya: React.FC<EditableSpanNyaPropsType> = React.memo((
    {
        onBlur, autoFocus,
        spanProps,

        info,
        ...props
    }
) => {
    const {onDoubleClick, children, ...restSpanProps} = spanProps || {
        onDoubleClick: undefined,
        children: undefined,
    };
    const [editMode, setEditMode] = useState<boolean>(false);

    const offEditMode = useCallback((e: FocusEvent<HTMLInputElement>) => {
        setEditMode(false);
        onBlur && onBlur(e);
    }, [setEditMode, onBlur]);
    const onEditMode = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true);
        onDoubleClick && onDoubleClick(e);
    }, [setEditMode, onDoubleClick]);

    DEV_VERSION && info && console.log("render EditableSpanNya-" + info);
    return (
        <>
            {editMode ? (
                <InputNya
                    onBlur={offEditMode}
                    autoFocus={!(autoFocus === false)}

                    info={"EditableSpanNya-" + info}
                    className={s.inputNya}
                    {...props}
                />
            ) : (
                <span
                    onDoubleClick={onEditMode}

                    className={s.spanNya}
                    {...restSpanProps}
                >
                    {props.value}
                </span>
            )}
        </>
    );
});

export default EditableSpanNya;
