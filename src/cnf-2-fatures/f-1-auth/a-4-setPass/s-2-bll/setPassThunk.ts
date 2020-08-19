import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {SetPassActions, SetPassActionsType} from "./SetPassActions";
import {SetPassAPI} from "../s-3-dal/SetPassAPI";

export const setPassword = (
    token: string, password: string, pass2: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, SetPassActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(SetPassActions.setLoading(true));

    await tryCatch(
        async () => {
            if (password !== pass2) dispatch(SetPassActions.setError("Passwords don't match!"));
            else {

                const data = await SetPassAPI.setPass(token, password);

                dispatch(SetPassActions.setSuccess(true));

                DEV_VERSION && console.log("Nya, SetPass Success!", data);
            }
        },
        (e) => dispatch(SetPassActions.setError(e)),
        "SetPass",
    );
};
