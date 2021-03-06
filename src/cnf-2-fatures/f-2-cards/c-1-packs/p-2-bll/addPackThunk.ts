import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {PacksAPI} from "../p-3-dal/PacksAPI";
import {ProfileActionsType} from "../../../f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {getPacks} from "./getPacksThunk";

export const addPack = (
    //
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> => async (
    dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType>,
    // getStore: GetAppStoreType
) => {
    // dispatch(RegisterActions.setLoading(true));

    await tryCatch(
        async () => {

            const data = await PacksAPI.addPack();

            // dispatch(RegisterActions.setSuccess(true));
            dispatch(getPacks());

            DEV_VERSION && console.log("Nya, addPack Success!", data);
        },
        (e) => {
            // dispatch(RegisterActions.setError(e))
        },
        "addPack"
    );
};
