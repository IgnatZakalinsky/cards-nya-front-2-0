import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    publicCardPacksCount: number;

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
}


export type SignInDataType = UserType & { error: string; };

export const LoginAPI = {
    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<SignInDataType>('/auth/login', {email, password, rememberMe});

        return response.data;
    },

};
