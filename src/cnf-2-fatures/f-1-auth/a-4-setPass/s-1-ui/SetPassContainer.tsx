import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DEV_VERSION} from "../../../../config";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import SetPass from "./SetPass";
import {useParams} from "react-router-dom";
import {setPassword} from "../s-2-bll/setPassThunk";

const SetPassContainer = React.memo(() => {
    const [pass, setPass] = useState<string>("");
    const [pass2, setPass2] = useState<string>("");
    const {token} = useParams();

    const dispatch = useDispatch();
    const setPassCallback = useCallback(
        () => dispatch(setPassword(token, pass, pass2)),
        [pass, pass2, dispatch]
    );
    const {loading} = useSelector((store: AppStoreType) => store.setPass);

    DEV_VERSION && console.log("render SetPassContainer");
    return (
        <SetPass
            pass={pass} setPass={setPass}
            pass2={pass2} setPass2={setPass2}
            setPassCallback={setPassCallback}
            loading={loading}
        />
    );
});

export default SetPassContainer;
