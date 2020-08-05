import React, {ChangeEvent, useCallback, useState} from "react";
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../l-2-bll/loginThunk";
import {DEV_VERSION} from "../../../../config";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";

const LoginContainer = React.memo(() => {
    const [email, setEmail] = useState<string>(DEV_VERSION ? 'nya-admin@nya.nya' : '');
    const [pass, setPass] = useState<string>(DEV_VERSION ? '1qazxcvBG' : '');
    const [remember, setRemember] = useState<boolean>(false);

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass(e.currentTarget.value),
        [setPass]
    );
    const setRememberCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setRemember(e.currentTarget.checked),
        [setRemember]
    );

    const dispatch = useDispatch();
    const signInCallback = useCallback(
        () => dispatch(signIn(email, pass, remember)),
        [email, pass, remember, dispatch]
    );
    const {loading} = useSelector((store: AppStoreType) => store.login);

    DEV_VERSION && console.log('render LoginContainer');
    return (
        <Login
            email={email} setEmail={setEmailCallback}
            pass={pass} setPass={setPassCallback}
            remember={remember} setRemember={setRememberCallback}
            signIn={signInCallback}
            loading={loading}
        />
    );
});

export default LoginContainer;
