import {loginInitState, LoginStateType} from "./LoginInitState";
import {LoginActionsType} from "./LoginActions";

export const loginReducer = (state = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case 'login/SET_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'login/SET_LOADING': {
            return {
                ...state,
                error: '',
                loading: action.loading,
                success: false,
            }
        }
        case 'login/SET_SUCCESS': {
            return {
                ...state,
                error: '',
                loading: false,
                success: action.success,
            }
        }

        default: {
            return state
        }
    }
};
