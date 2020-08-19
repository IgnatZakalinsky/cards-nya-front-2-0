import React, {useEffect, useState} from "react";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {Redirect} from "react-router-dom";
import SetPassStatus from "./SetPassStatus";
import SetPassContainer from "./SetPassContainer";
import {SetPassActions} from "../s-2-bll/SetPassActions";

const SetPassPage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.setPass);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            if (error || success) dispatch(SetPassActions.setError(""));

            setFirst(false);
        } else {

            if (success && !redirect) setTimeout(() => setRedirect(true), 500);
        }
    }, [first, success, error, dispatch, setFirst, redirect, setRedirect]);

    DEV_VERSION && console.log("render SetPassPage");
    if (redirect && success && !first) return <Redirect to={PATH.LOGIN}/>;
    return (
        <div>
            setPass
            <SetPassStatus first={first}/>
            <SetPassContainer/>
            <LinkNya to={PATH.LOGIN} info={"login in setPass"}>login</LinkNya>
        </div>
    );
};

export default SetPassPage;
