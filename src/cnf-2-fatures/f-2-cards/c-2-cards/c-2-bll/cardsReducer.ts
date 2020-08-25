import {CardsInitState, CardsStateType} from "./CardsInitState";
import {CardsActionsType} from "./CardsActions";

export const cardsReducer =
    (state = CardsInitState, action: CardsActionsType): CardsStateType => {
        switch (action.type) {
            case "cards/SET_CARDS": {
                return {
                    ...state,
                    cards: action.cards,
                }
            }

            default: {
                return state
            }
        }
    };
