import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type SignInDataType = {
    error: string;
}

export const ProfileAPI = {
    updateUser: async (name: string, avatar: string) => {
        const response = await instance.put<SignInDataType>('/auth/me', {name, avatar});

        return response.data;
    },
    getUsers: async () => {
        const response = await instance.get<SignInDataType>(`/social/users`);

        return response.data;
    },
    sendGeneralChatMessage: async () => {
        const response = await instance.post<SignInDataType>('/social/general/message',
            {message: 'some message'});

        return response.data;
    },
    getGeneralChatMessages: async () => {
        const response = await instance.get<SignInDataType>(`/social/general/message`);

        return response.data;
    },

};
