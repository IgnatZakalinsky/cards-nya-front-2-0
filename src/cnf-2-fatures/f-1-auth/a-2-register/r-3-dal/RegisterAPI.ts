import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type SignInDataType = {
    error: string;
}

export const RegisterAPI = {
    signUp: async (email: string, password: string) => {
        const response = await instance.post<SignInDataType>('/auth/register', {email, password});

        return response.data;
    },

};
