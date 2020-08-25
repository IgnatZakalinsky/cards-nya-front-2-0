import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";
import {PackType} from "./PacksInitState";

export type PacksActionsType = InferActionsType<typeof PacksActions>;

export const PacksActions = {
    setLoading: (loading: boolean) => ({
        type: 'packs/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'packs/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'packs/SET_ERROR',
        error,
    } as const),

    setPacks: (packs: PackType[]) => ({
        type: 'packs/SET_PACKS',
        packs,
    } as const),

};
