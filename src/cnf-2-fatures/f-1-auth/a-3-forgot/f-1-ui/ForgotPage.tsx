import React, {useEffect, useState} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import ForgotStatus from "./ForgotStatus";
import ForgotContainer from "./ForgotContainer";
import {ForgotActions} from "../f-2-bll/ForgotActions";

const ForgotPage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.forgot);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            if (success || error) dispatch(ForgotActions.setError(""));

            setFirst(false);
        } else {

        }
    }, [first, success, error, dispatch, setFirst]);

    DEV_VERSION && console.log("render ForgotPage");
    return (
        <div>
            forgot
            <ForgotStatus first={first}/>

            {success
                ? <div>click the link in the message in your email</div>
                : <ForgotContainer/>
            }

            <div><LinkNya to={PATH.LOGIN} info={"login in forgot"}>login</LinkNya></div>
        </div>
    );
};

export default ForgotPage;
