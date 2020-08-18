import React, {useCallback, useState} from "react";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../r-2-bll/registerThunk";
import {DEV_VERSION} from "../../../../config";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";

const RegisterContainer = React.memo(() => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [pass2, setPass2] = useState<string>("");

    const dispatch = useDispatch();
    const signUpCallback = useCallback(
        () => dispatch(signUp(email, pass, pass2)),
        [email, pass, pass2, dispatch]
    );
    const {loading} = useSelector((store: AppStoreType) => store.register);

    DEV_VERSION && console.log("render RegisterContainer");
    return (
        <Register
            email={email} setEmail={setEmail}
            pass={pass} setPass={setPass}
            pass2={pass2} setPass2={setPass2}
            signUp={signUpCallback}
            loading={loading}
        />
    );
});

export default RegisterContainer;
