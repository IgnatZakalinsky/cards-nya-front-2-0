import React, {useEffect, useState} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {getUsers} from "../p-2-bll/thunks/getUsersThunk";
import {sendGeneralChatMessage} from "../p-2-bll/thunks/sendGeneralChatMessageThunk";
import {getGeneralChatMessages} from "../p-2-bll/thunks/getGeneralChatMessagesThunk";
import ProfileStatus from "./ProfileStatus";
import ProfileContainer from "./ProfileContainer";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ProfileActions} from "../p-2-bll/ProfileActions";

const ProfilePage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.profile);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            if (error || success) dispatch(ProfileActions.setError(""));

            setFirst(false);
        } else {

        }
    }, [first, success, error, dispatch, setFirst]);

    const get = () => dispatch(getUsers());
    const send = () => dispatch(sendGeneralChatMessage());
    const getMessages = () => dispatch(getGeneralChatMessages());

    DEV_VERSION && console.log("render ProfilePage");
    return (
        <div>
            ProfilePage
            <ProfileStatus first={first}/>
            <ProfileContainer/>

            <div>
                <ButtonNya onClick={get}>get users</ButtonNya>
                <ButtonNya onClick={send}>send message</ButtonNya>
                <ButtonNya onClick={getMessages}>get messages</ButtonNya>
            </div>
        </div>
    );
};

export default ProfilePage;
