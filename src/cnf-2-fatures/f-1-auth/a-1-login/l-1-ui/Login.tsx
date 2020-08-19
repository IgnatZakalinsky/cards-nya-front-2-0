import React from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {DEV_VERSION} from "../../../../config";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";

type LoginPropsType = {
    email: string;
    setEmail: (email: string) => void;
    pass: string;
    setPass: (pass: string) => void;
    remember: boolean;
    setRemember: (remember: boolean) => void;

    signIn: () => void;
    loading: boolean;
};

const Login: React.FC<LoginPropsType> = React.memo((
    {email, setEmail, pass, setPass, remember, setRemember, signIn, loading}
) => {

    DEV_VERSION && console.log("render Login");
    return (
        <>
            <div><InputNya info={"email"} value={email} onChangeText={setEmail}/></div>
            <div><InputNya info={"pass"} value={pass} onChangeText={setPass}/></div>
            <div>
                <label>
                    <InputNya type={"checkbox"} info={"remember"} checked={remember} onChangeChecked={setRemember}/>
                    remember me
                </label>
            </div>
            <div><LinkNya to={PATH.FORGOT} info={"forgot in login"}>forgot?</LinkNya></div>
            <div><ButtonNya info={"sign in"} onClick={signIn} disabled={loading}>sign in</ButtonNya></div>
        </>
    );
});

export default Login;
