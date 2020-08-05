export type LoginStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

export const loginInitState: LoginStateType = {
    loading: false,
    success: false,
    error: '',
};
