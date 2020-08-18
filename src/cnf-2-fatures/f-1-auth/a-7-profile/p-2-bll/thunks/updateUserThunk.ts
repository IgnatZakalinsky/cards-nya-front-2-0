import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../../config";
import {ProfileActions, ProfileActionsType} from "../ProfileActions";
import {ProfileAPI} from "../../p-3-dal/ProfileAPI";

export const updateUser = (
    name: string, avatar: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(ProfileActions.setLoading(true));

    await tryCatch(
        async () => {

            const data = await ProfileAPI.updateUser(name, avatar);

            dispatch(ProfileActions.setUser(data.updatedUser));
            dispatch(ProfileActions.setSuccess(true));

            DEV_VERSION && console.log("Nya, updateUser Success!", data);
        },
        (e) => dispatch(ProfileActions.setError(e)),
        "updateUser",
    );
};
