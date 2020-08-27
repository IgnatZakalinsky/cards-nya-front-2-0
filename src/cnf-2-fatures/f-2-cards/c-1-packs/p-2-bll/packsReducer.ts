import {PacksInitState, PacksStateType} from "./PacksInitState";
import {PacksActionsType} from "./PacksActions";

export const packsReducer =
    (state = PacksInitState, action: PacksActionsType): PacksStateType => {
        switch (action.type) {
            case "packs/SET_PACKS": {
                return {
                    ...state,
                    packs: action.packs,
                }
            }
            case "packs/SET_PACK_USER_ID": {
                return {
                    ...state,
                    packUser_id: action.packUser_id,
                }
            }

            default: {
                return state
            }
        }
    };
