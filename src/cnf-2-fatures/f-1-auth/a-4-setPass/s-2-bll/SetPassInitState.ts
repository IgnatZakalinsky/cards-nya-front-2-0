export type SetPassStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

export const SetPassInitState: SetPassStateType = {
    loading: false,
    success: false,
    error: "",
};
