import React from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {DEV_VERSION} from "../../../../config";

type SetPassPropsType = {
    pass: string;
    setPass: (pass: string) => void;
    pass2: string;
    setPass2: (pass2: string) => void;

    setPassCallback: () => void;
    loading: boolean
};

const SetPass: React.FC<SetPassPropsType> = React.memo((
    {pass, setPass, pass2, setPass2, setPassCallback, loading}
) => {

    DEV_VERSION && console.log("render SetPass");
    return (
        <>
            <div><InputNya info={"pass"} value={pass} onChangeText={setPass}/></div>
            <div><InputNya info={"pass confirm"} value={pass2} onChangeText={setPass2}/></div>
            <div><ButtonNya info={"sign up"} onClick={setPassCallback} disabled={loading}>setPass</ButtonNya></div>
        </>
    );
});

export default SetPass;
