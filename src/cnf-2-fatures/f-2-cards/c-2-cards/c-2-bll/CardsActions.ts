import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/actions";
import {CardType} from "./CardsInitState";

export type CardsActionsType = InferActionsType<typeof CardsActions>;

export const CardsActions = {
    setLoading: (loading: boolean) => ({
        type: 'cards/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'cards/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'cards/SET_ERROR',
        error,
    } as const),

    setCards: (cards: CardType[]) => ({
        type: 'cards/SET_CARDS',
        cards,
    } as const),

};
