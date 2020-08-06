import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {UserType} from "../../a-7-profile/p-2-bll/ProfileInitState";

export type SignInDataType = UserType & { error: string; };

export const LoginAPI = {
    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<SignInDataType>('/auth/login', {email, password, rememberMe});

        return response.data;
    },

};
