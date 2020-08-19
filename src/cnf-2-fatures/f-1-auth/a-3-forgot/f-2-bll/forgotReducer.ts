import {ForgotInitState, ForgotStateType} from "./ForgotInitState";
import {ForgotActionsType} from "./ForgotActions";

export const forgotReducer = (state = ForgotInitState, action: ForgotActionsType): ForgotStateType => {
    switch (action.type) {
        case "forgot/SET_ERROR": {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case "forgot/SET_LOADING": {
            return {
                ...state,
                error: "",
                loading: action.loading,
                success: false,
            }
        }
        case "forgot/SET_SUCCESS": {
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
