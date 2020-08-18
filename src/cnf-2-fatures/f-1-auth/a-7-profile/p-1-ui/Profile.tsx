import React from "react";
import {DEV_VERSION} from "../../../../config";
import EditableSpanNya from "../../../../cnf-0-common/c-1-ui/editableSpan/EditableSpanNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";

type ProfilePropsType = {
    avatar: string;
    setAvatar: (avatar: string) => void;
    name: string;
    setName: (name: string) => void;
    update: () => void;
    logOutCallback: () => void;
};

const Profile: React.FC<ProfilePropsType> = React.memo((
    {avatar, setAvatar, name, setName, update, logOutCallback}
) => {

    DEV_VERSION && console.log("render Profile");
    return (
        <div>
            <img src={avatar} alt={"avatar"} height={"200px"}/>
            <div>
                avatar url: <EditableSpanNya value={avatar} onChangeText={setAvatar} onBlur={update}/>
            </div>
            <div>
                name: <EditableSpanNya value={name} onChangeText={setName} onBlur={update}/>
            </div>
            <ButtonNya onClick={logOutCallback}>LogOut</ButtonNya>
        </div>
    );
});

export default Profile;
