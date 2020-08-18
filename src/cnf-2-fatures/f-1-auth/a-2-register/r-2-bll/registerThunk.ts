import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {RegisterActions, RegisterActionsType} from "./RegisterActions";
import {RegisterAPI} from "../r-3-dal/RegisterAPI";
import {DEV_VERSION} from "../../../../config";

export const signUp = (
    email: string, password: string, pass2: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, RegisterActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(RegisterActions.setLoading(true));

    await tryCatch(
        async () => {
            if (password !== pass2) dispatch(RegisterActions.setError("Passwords don't match!"));
            else {

                const data = await RegisterAPI.signUp(email, password);

                dispatch(RegisterActions.setSuccess(true));

                DEV_VERSION && console.log("Nya, Register Success!", data);
            }
        },
        (e) => dispatch(RegisterActions.setError(e)),
        "Register",
    );
};
