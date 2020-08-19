import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type RegisterDataType = {
    error: string;
}

export const SetPassAPI = {
    setPass: async (resetPasswordToken: string, password: string) => {
        const response = await instance.post<RegisterDataType>(
            "/auth/set-new-password",
            {resetPasswordToken, password}
            );

        return response.data;
    },

};
