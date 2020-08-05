import React, {useEffect, useState} from "react";
import RegisterContainer from "./RegisterContainer";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import RegisterStatus from "./RegisterStatus";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {Redirect} from "react-router-dom";
import {RegisterActions} from "../r-2-bll/RegisterActions";

const RegisterPage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.register);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            if (error || success) dispatch(RegisterActions.setError(''));

            setFirst(false);
        } else {

            if (success && !redirect) setTimeout(() => setRedirect(true), 500);
        }
    }, [first, success, error, dispatch, setFirst, redirect, setRedirect]);

    DEV_VERSION && console.log('render RegisterPage');
    if (redirect && success && !first) return <Redirect to={PATH.LOGIN}/>;
    return (
        <div>
            register
            <RegisterStatus first={first}/>
            <RegisterContainer/>
            <LinkNya to={PATH.LOGIN} info={'login in register'}>login</LinkNya>
        </div>
    );
};

export default RegisterPage;
