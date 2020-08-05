import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";

export type RegisterActionsType = InferActionsType<typeof RegisterActions>;

export const RegisterActions = {
    setLoading: (loading: boolean) => ({
        type: 'register/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'register/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'register/SET_ERROR',
        error,
    } as const),

};
