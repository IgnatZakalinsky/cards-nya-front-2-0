import React, {useEffect, useState} from "react";
import LoginContainer from "./LoginContainer";
import LoginStatus from "./LoginStatus";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {LoginActions} from "../l-2-bll/LoginActions";

const LoginPage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.login);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            if (success || error) dispatch(LoginActions.setError(''));

            setFirst(false);
        } else {

            if (success && !redirect) setTimeout(() => setRedirect(true), 500);
        }
    }, [first, success, error, dispatch, setFirst, redirect, setRedirect]);

    DEV_VERSION && console.log('render LoginPage');
    // if (redirect && success && !first) return <Redirect to={PATH.PROFILE}/>;
    return (
        <div>
            login
            <LoginStatus first={first}/>
            <LoginContainer/>
            {/*<LinkNya to={PATH.REGISTER} info={'register in login'}>register</LinkNya>*/}
        </div>
    );
};

export default LoginPage;
