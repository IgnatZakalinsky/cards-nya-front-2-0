import React from "react";
import Status from "../../../../cnf-0-common/c-1-ui/status/Status";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {DEV_VERSION} from "../../../../config";

type LoginStatusPropsType = {
    first: boolean;
}

const LoginStatus: React.FC<LoginStatusPropsType> = React.memo(({first}) => {
    const {loading, success, error} = useSelector((store: AppStoreType) => store.login);

    DEV_VERSION && console.log('render LoginStatus');
    return <Status loading={loading} success={success} error={error} info={'login'} first={first}/>
});

export default LoginStatus;
