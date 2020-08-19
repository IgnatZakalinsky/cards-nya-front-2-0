import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {ForgotActions, ForgotActionsType} from "./ForgotActions";
import {ForgotAPI} from "../f-3-dal/ForgotAPI";

export const forgot = (
    email: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ForgotActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(ForgotActions.setLoading(true));

    await tryCatch(
        async () => {

            const data = await ForgotAPI.forgot(email);

            dispatch(ForgotActions.setSuccess(true));

            DEV_VERSION && console.log("Nya, Forgot Success!", data);

        },
        (e) => dispatch(ForgotActions.setError(e)),
        "Forgot",
    );
};
