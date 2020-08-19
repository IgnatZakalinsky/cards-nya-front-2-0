export type ForgotStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

export const ForgotInitState: ForgotStateType = {
    loading: false,
    success: false,
    error: "",
};
