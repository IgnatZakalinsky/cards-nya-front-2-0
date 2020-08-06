import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {ProfileActions, ProfileActionsType} from "./ProfileActions";
import {ProfileAPI} from "../p-3-dal/ProfileAPI";

export const getUsers = (): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(ProfileActions.setLoading(true));

    await tryCatch(
        async () => {

            const data = await ProfileAPI.getUsers();

            // dispatch(nekoSetName(data.name));
            dispatch(ProfileActions.setSuccess(true));

            DEV_VERSION && console.log('Nya, getUsers Success!', data)
        },
        (e) => dispatch(ProfileActions.setError(e)),
        "getUsers",
    );
};
