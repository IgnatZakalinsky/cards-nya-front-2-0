import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {UserType} from "../p-2-bll/ProfileInitState";

export type GetMeDataType = UserType & { error: string; };
export type UpdateUserDataType = {
    updatedUser: UserType;
    error: string;
};

export const ProfileAPI = {
    getMe: async () => {
        const response = await instance.post<GetMeDataType>("/auth/me");

        return response.data;
    },

    updateUser: async (name: string, avatar: string) => {
        const response = await instance.put<UpdateUserDataType>("/auth/me", {name, avatar});

        return response.data;
    },
    getUsers: async () => {
        const response = await instance.get<any>("/social/users");

        return response.data;
    },
    sendGeneralChatMessage: async () => {
        const response = await instance.post<any>("/social/general/message",
            {message: "some message"});

        return response.data;
    },
    getGeneralChatMessages: async () => {
        const response = await instance.get<any>("/social/general/message");

        return response.data;
    },
};
