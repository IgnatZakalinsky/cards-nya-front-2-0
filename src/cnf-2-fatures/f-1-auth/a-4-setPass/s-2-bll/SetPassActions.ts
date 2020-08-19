import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";

export type SetPassActionsType = InferActionsType<typeof SetPassActions>;

export const SetPassActions = {
    setLoading: (loading: boolean) => ({
        type: "setPass/SET_LOADING",
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: "setPass/SET_SUCCESS",
        success,
    } as const),
    setError: (error: string) => ({
        type: "setPass/SET_ERROR",
        error,
    } as const),

};
