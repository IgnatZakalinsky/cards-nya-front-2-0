import React, {useCallback, useState} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {updateUser} from "../p-2-bll/thunks/updateUserThunk";
import Profile from "./Profile";
import {logOut} from "../p-2-bll/thunks/logOutThunk";

const ProfileContainer = React.memo(() => {
    const {user, loading} = useSelector((store: AppStoreType) => store.profile);
    const [name, setName] = useState<string>(user.name);
    const [avatar, setAvatar] = useState<string>(user.avatar || "");

    const dispatch = useDispatch();
    const update = useCallback(() => {
        if (loading) {
            setName(user.name);
            setAvatar(user.avatar || "");
        }
        else dispatch(updateUser(name, avatar));
    }, [dispatch, name, avatar, loading, setName, setAvatar, user]);
    const logOutCallback = useCallback(() => dispatch(logOut()), [dispatch]);

    DEV_VERSION && console.log("render ProfileContainer");
    return (
        <Profile
            loading={loading}
            avatar={avatar}
            setAvatar={setAvatar}
            name={name}
            setName={setName}
            update={update}
            logOutCallback={logOutCallback}
        />
    );
});

export default ProfileContainer;
