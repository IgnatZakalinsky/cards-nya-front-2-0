import React, {ChangeEvent} from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {DEV_VERSION} from "../../../../config";

type LoginPropsType = {
    email: string;
    setEmail: (email: ChangeEvent<HTMLInputElement>) => void;
    pass: string;
    setPass: (pass: ChangeEvent<HTMLInputElement>) => void;
    remember: boolean;
    setRemember: (remember: ChangeEvent<HTMLInputElement>) => void;

    signIn: () => void;
    loading: boolean;
};

const Login: React.FC<LoginPropsType> = React.memo((
    {email, setEmail, pass, setPass, remember, setRemember, signIn, loading}
) => {

    DEV_VERSION && console.log('render Login');
    return (
        <>
            <div><InputNya info={'email'} value={email} onChange={setEmail}/></div>
            <div><InputNya info={'pass'} value={pass} onChange={setPass}/></div>
            <div>
                <label>
                    <InputNya type={'checkbox'} info={'remember'} checked={remember} onChange={setRemember}/>
                    remember me
                </label>
            </div>
            <div>forgot? (will be link)</div>
            <div><ButtonNya info={'sign in'} onClick={signIn} disabled={loading}>sign in</ButtonNya></div>
        </>
    );
});

export default Login;
