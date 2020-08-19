import React from "react";
import {DEV_VERSION} from "../../../../config";
import EditableSpanNya from "../../../../cnf-0-common/c-1-ui/editableSpan/EditableSpanNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";

type ProfilePropsType = {
    loading: boolean;
    avatar: string;
    setAvatar: (avatar: string) => void;
    name: string;
    setName: (name: string) => void;
    update: () => void;
    logOutCallback: () => void;
};

const Profile: React.FC<ProfilePropsType> = React.memo((
    {loading, avatar, setAvatar, name, setName, update, logOutCallback}
) => {

    DEV_VERSION && console.log("render Profile");
    return (
        <div>
            <img src={avatar} alt={"avatar"} height={"200px"}/>
            <div>
                avatar url: <EditableSpanNya
                value={avatar}
                onChangeText={setAvatar}
                onBlur={update}
                info={"avatar-url"}
            />
            </div>
            <div>
                name: <EditableSpanNya value={name} onChangeText={setName} onBlur={update} info={"name"}/>
            </div>
            <ButtonNya onClick={logOutCallback} disabled={loading}>LogOut</ButtonNya>
        </div>
    );
});

export default Profile;
