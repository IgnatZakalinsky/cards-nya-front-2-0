import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {PacksAPI} from "../p-3-dal/PacksAPI";
import {ProfileActions, ProfileActionsType} from "../../../f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {getPacks} from "./getPacksThunk";

export const updatePack = (id: string): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> =>
    async (
        dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType>,
        // getStore: GetAppStoreType
    ) => {
        // dispatch(RegisterActions.setLoading(true));

        await tryCatch(
            async () => {

                const data = await PacksAPI.updatePack(id);
                // dispatch(RegisterActions.setSuccess(true));
                dispatch(getPacks());

                DEV_VERSION && console.log("Nya, updatePack Success!", data)
            },
            (e) => {
                // dispatch(RegisterActions.setError(e))
            },
            "updatePack"
        );
    };
