import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type ForgotDataType = {
    error: string;
}

export const ForgotAPI = {
    forgot: async (email: string) => {
        const response = await instance.post<ForgotDataType>("/auth/forgot", {
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `
<div style="background-color: lime">
password recovery link:
<a href='http://localhost:3000/#/set-new-password/$token$'>
http://localhost:3000/#/set-new-password/$token$
</a>
<div>resetPasswordToken: $token$</div>
</div>
`
        });

        return response.data;
    },

};
