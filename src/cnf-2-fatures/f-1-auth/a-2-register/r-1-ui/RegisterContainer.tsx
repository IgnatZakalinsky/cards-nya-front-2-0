import React, {ChangeEvent, useCallback, useState} from "react";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../r-2-bll/registerThunk";
import {DEV_VERSION} from "../../../../config";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";

const RegisterContainer = React.memo(() => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [pass2, setPass2] = useState<string>('');

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass(e.currentTarget.value),
        [setPass]
    );
    const setPassCallback2 = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass2(e.currentTarget.value),
        [setPass2]
    );

    const dispatch = useDispatch();
    const signUpCallback = useCallback(
        () => dispatch(signUp(email, pass, pass2)),
        [email, pass, pass2, dispatch]
    );
    const {loading} = useSelector((store: AppStoreType) => store.register);

    DEV_VERSION && console.log('render RegisterContainer');
    return (
        <Register
            email={email} setEmail={setEmailCallback}
            pass={pass} setPass={setPassCallback}
            pass2={pass2} setPass2={setPassCallback2}
            signUp={signUpCallback}
            loading={loading}
        />
    );
});

export default RegisterContainer;
