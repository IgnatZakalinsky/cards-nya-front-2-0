import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type RegisterDataType = {
    error: string;
}

export const RegisterAPI = {
    signUp: async (email: string, password: string) => {
        const response = await instance.post<RegisterDataType>("/auth/register", {email, password});

        return response.data;
    },

};
