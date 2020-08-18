import React from "react";
import Status from "../../../../cnf-0-common/c-1-ui/status/Status";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {DEV_VERSION} from "../../../../config";

type ProfileStatusPropsType = {
    first: boolean;
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = React.memo(({first}) => {
    const {loading, success, error} = useSelector((store: AppStoreType) => store.profile);

    DEV_VERSION && console.log("render ProfileStatus");
    return <Status loading={loading} success={success} error={error} info={"profile"} first={first}/>
});

export default ProfileStatus;
