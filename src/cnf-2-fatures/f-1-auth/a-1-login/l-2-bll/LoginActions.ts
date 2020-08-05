import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";

export type LoginActionsType = InferActionsType<typeof LoginActions>;

export const LoginActions = {
    setLoading: (loading: boolean) => ({
        type: 'login/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'login/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'login/SET_ERROR',
        error,
    } as const),

};
