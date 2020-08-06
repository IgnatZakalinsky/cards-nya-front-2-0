import React from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {updateUser} from "../p-2-bll/updateUserThunk";
import {getUsers} from "../p-2-bll/getUsersThunk";
import { sendGeneralChatMessage } from "../p-2-bll/sendGeneralChatMessageThunk";
import {getGeneralChatMessages} from "../p-2-bll/getGeneralChatMessagesThunk";

const ProfilePage = () => {
    const {user} = useSelector((store: AppStoreType) => store.profile);

    const dispatch = useDispatch();
    const update = () => dispatch(updateUser('nya', 'some avatar'));
    const get = () => dispatch(getUsers());
    const send = () => dispatch(sendGeneralChatMessage());
    const getMessages = () => dispatch(getGeneralChatMessages());

    DEV_VERSION && console.log('render ProfilePage');
    return (
        <div>
            ProfilePage
            <div>{user.name}</div>
            <div>xy</div>sdfsdfs
            <div>
                <ButtonNya onClick={update}>set name</ButtonNya>
                <ButtonNya onClick={get}>get users</ButtonNya>
                <ButtonNya onClick={send}>send message</ButtonNya>
                <ButtonNya onClick={getMessages}>get messages</ButtonNya>
            </div>
        </div>
    );
};

export default ProfilePage;
