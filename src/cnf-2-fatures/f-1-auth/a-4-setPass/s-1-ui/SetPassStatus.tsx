import React from "react";
import Status from "../../../../cnf-0-common/c-1-ui/status/Status";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {DEV_VERSION} from "../../../../config";

type SetPassStatusPropsType = {
    first: boolean;
}

const SetPassStatus: React.FC<SetPassStatusPropsType> = React.memo(({first}) => {
    const {loading, success, error} = useSelector((store: AppStoreType) => store.setPass);

    DEV_VERSION && console.log("render SetPassStatus");
    return <Status loading={loading} success={success} error={error} info={"setPass"} first={first}/>
});

export default SetPassStatus;
