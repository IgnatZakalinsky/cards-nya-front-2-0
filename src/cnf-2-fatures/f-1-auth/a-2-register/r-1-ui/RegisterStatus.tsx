import React from "react";
import Status from "../../../../cnf-0-common/c-1-ui/status/Status";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {DEV_VERSION} from "../../../../config";

type RegisterStatusPropsType = {
    first: boolean;
}

const RegisterStatus: React.FC<RegisterStatusPropsType> = React.memo(({first}) => {
    const {loading, success, error} = useSelector((store: AppStoreType) => store.register);

    DEV_VERSION && console.log('render RegisterStatus');
    return <Status loading={loading} success={success} error={error} info={'register'} first={first}/>
});

export default RegisterStatus;
