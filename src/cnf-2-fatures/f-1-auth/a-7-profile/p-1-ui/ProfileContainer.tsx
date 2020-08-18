import React from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {updateUser} from "../p-2-bll/thunks/updateUserThunk";

const ProfileContainer = () => {
    const {user} = useSelector((store: AppStoreType) => store.profile);

    const dispatch = useDispatch();
    const update = () => dispatch(updateUser("nya", "some avatar"));

    DEV_VERSION && console.log("render ProfileContainer");
    return (
        <div>
            <img src={user.avatar} alt={"avatar"} height={500}/>
            <div>name: {user.name}</div>


            <div>
                <ButtonNya onClick={update}>set name</ButtonNya>
            </div>
        </div>
    );
};

export default ProfileContainer;
