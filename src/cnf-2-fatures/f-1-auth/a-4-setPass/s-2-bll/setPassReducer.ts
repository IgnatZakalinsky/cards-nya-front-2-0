import {SetPassInitState, SetPassStateType} from "./SetPassInitState";
import {SetPassActionsType} from "./SetPassActions";

export const setPassReducer =
    (state = SetPassInitState, action: SetPassActionsType): SetPassStateType => {
        switch (action.type) {
            case "setPass/SET_ERROR": {
                return {
                    ...state,
                    error: action.error,
                    loading: false,
                    success: false,
                }
            }
            case "setPass/SET_LOADING": {
                return {
                    ...state,
                    error: "",
                    loading: action.loading,
                    success: false,
                }
            }
            case "setPass/SET_SUCCESS": {
                return {
                    ...state,
                    error: "",
                    loading: false,
                    success: action.success,
                }
            }

            default: {
                return state
            }
        }
    };
