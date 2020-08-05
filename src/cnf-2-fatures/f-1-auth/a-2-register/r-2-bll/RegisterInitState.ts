export type RegisterStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

export const RegisterInitState: RegisterStateType = {
    loading: false,
    success: false,
    error: '',
};
