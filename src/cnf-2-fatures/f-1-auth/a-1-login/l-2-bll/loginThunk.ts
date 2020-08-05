import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {LoginActions, LoginActionsType} from "./LoginActions";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {LoginAPI} from "../l-3-dal/LoginAPI";
import {DEV_VERSION} from "../../../../config";

export const signIn = (
    email: string, password: string, rememberMe: boolean
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, LoginActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(LoginActions.setLoading(true));

    await tryCatch(
        async () => {
            const data = await LoginAPI.signIn(email, password, rememberMe);

            dispatch(LoginActions.setSuccess(true));
            // dispatch(ProfileActions.setUser(data));

            DEV_VERSION && console.log('Nya, Login Success!', data);
        },
        (e) => dispatch(LoginActions.setError(e)),
        "Login"
    );
};
