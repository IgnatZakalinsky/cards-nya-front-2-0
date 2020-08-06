import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";
import {UserType} from "./ProfileInitState";

export type ProfileActionsType = InferActionsType<typeof ProfileActions>;

export const ProfileActions = {
    setLoading: (loading: boolean) => ({
        type: 'profile/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'profile/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'profile/SET_ERROR',
        error,
    } as const),

    setUser: (user: UserType) => ({
        type: 'profile/SET_USER',
        user,
    } as const),

};
