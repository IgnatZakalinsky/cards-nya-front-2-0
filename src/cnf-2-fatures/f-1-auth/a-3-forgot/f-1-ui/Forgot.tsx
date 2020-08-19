import React from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {DEV_VERSION} from "../../../../config";

type ForgotPropsType = {
    email: string;
    setEmail: (email: string) => void;

    forgot: () => void;
    loading: boolean
};

const Forgot: React.FC<ForgotPropsType> = React.memo(({email, setEmail, forgot, loading}) => {

    DEV_VERSION && console.log("render Forgot");
    return (
        <>
            <div><InputNya info={"email"} value={email} onChangeText={setEmail}/></div>
            <div><ButtonNya info={"forgot-send"} onClick={forgot} disabled={loading}>send</ButtonNya></div>
        </>
    );
});

export default Forgot;
