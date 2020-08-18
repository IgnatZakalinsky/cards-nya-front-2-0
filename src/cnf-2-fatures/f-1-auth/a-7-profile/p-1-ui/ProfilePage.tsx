import React from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch} from "react-redux";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {getUsers} from "../p-2-bll/thunks/getUsersThunk";
import { sendGeneralChatMessage } from "../p-2-bll/thunks/sendGeneralChatMessageThunk";
import {getGeneralChatMessages} from "../p-2-bll/thunks/getGeneralChatMessagesThunk";
import ProfileStatus from "./ProfileStatus";
import ProfileContainer from "./ProfileContainer";

const ProfilePage = () => {

    const dispatch = useDispatch();
    const get = () => dispatch(getUsers());
    const send = () => dispatch(sendGeneralChatMessage());
    const getMessages = () => dispatch(getGeneralChatMessages());

    DEV_VERSION && console.log("render ProfilePage");
    return (
        <div>
            ProfilePage
            <ProfileStatus first={false}/>
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
