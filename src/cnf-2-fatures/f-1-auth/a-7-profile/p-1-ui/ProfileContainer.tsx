import React, {useState} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {updateUser} from "../p-2-bll/thunks/updateUserThunk";
import EditableSpanNya from "../../../../cnf-0-common/c-1-ui/editableSpan/EditableSpanNya";

const ProfileContainer = () => {
    const {user} = useSelector((store: AppStoreType) => store.profile);
    const [name, setName] = useState<string>(user.name);
    const [avatar, setAvatar] = useState<string>(user.avatar || "");

    const dispatch = useDispatch();
    const update = () => dispatch(updateUser(name, avatar));

    DEV_VERSION && console.log("render ProfileContainer");
    return (
        <div>
            <img src={user.avatar} alt={"avatar"} height={500}/>
            <div>
                avatar url: <EditableSpanNya value={avatar} onChangeText={setAvatar} onBlur={update}/>
            </div>
            <div>
                name: <EditableSpanNya value={name} onChangeText={setName} onBlur={update}/>
            </div>
        </div>
    );
};

export default ProfileContainer;
