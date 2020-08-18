import {ProfileInitState, ProfileStateType} from "./ProfileInitState";
import {ProfileActionsType} from "./ProfileActions";

export const profileReducer =
    (state = ProfileInitState, action: ProfileActionsType): ProfileStateType => {
        switch (action.type) {
            case "profile/SET_USER": {
                return {
                    ...state,
                    user: action.user,
                }
            }
            case "profile/SET_ERROR": {
                return {
                    ...state,
                    error: action.error,
                    loading: false,
                    success: false,
                }
            }
            case "profile/SET_LOADING": {
                return {
                    ...state,
                    error: "",
                    loading: action.loading,
                    success: false,
                }
            }
            case "profile/SET_SUCCESS": {
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
