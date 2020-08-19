import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DEV_VERSION} from "../../../../config";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import Forgot from "./Forgot";
import {forgot} from "../f-2-bll/forgotThunk";

const ForgotContainer = React.memo(() => {
    const [email, setEmail] = useState<string>("");

    const dispatch = useDispatch();
    const forgotCallback = useCallback(
        () => dispatch(forgot(email)),
        [email, dispatch]
    );
    const {loading} = useSelector((store: AppStoreType) => store.forgot);

    DEV_VERSION && console.log("render ForgotContainer");
    return (
        <Forgot
            email={email} setEmail={setEmail}
            forgot={forgotCallback}
            loading={loading}
        />
    );
});

export default ForgotContainer;
