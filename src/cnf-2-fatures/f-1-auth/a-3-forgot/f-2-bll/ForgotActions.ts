import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";

export type ForgotActionsType = InferActionsType<typeof ForgotActions>;

export const ForgotActions = {
    setLoading: (loading: boolean) => ({
        type: "forgot/SET_LOADING",
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: "forgot/SET_SUCCESS",
        success,
    } as const),
    setError: (error: string) => ({
        type: "forgot/SET_ERROR",
        error,
    } as const),

};
