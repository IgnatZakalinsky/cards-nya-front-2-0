import React from "react";
import Status from "../../../../cnf-0-common/c-1-ui/status/Status";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {DEV_VERSION} from "../../../../config";

type ForgotStatusPropsType = {
    first: boolean;
}

const ForgotStatus: React.FC<ForgotStatusPropsType> = React.memo(({first}) => {
    const {loading, success, error} = useSelector((store: AppStoreType) => store.forgot);

    DEV_VERSION && console.log("render ForgotStatus");
    return <Status loading={loading} success={success} error={error} info={"forgot"} first={first}/>
});

export default ForgotStatus;
