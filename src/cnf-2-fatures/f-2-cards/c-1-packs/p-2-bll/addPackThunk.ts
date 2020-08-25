import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {PacksAPI} from "../p-3-dal/PacksAPI";
import {ProfileActions, ProfileActionsType} from "../../../f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {getPacks} from "./getPacksThunk";

export const addPack = (): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> =>
    async (
        dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType>,
        getStore: GetAppStoreType
    ) => {
        // nekoClear(dispatch);
        // signInLoading(dispatch, true);
        // dispatch(RegisterActions.setLoading(true));

        const token = "";

        await tryCatch(
            async () => {

                const data = await PacksAPI.addPack(token);

                if (data.error) {
                    // dispatch(RegisterActions.setError(data.error));

                    DEV_VERSION && console.log('Nya, addPack Error!', data);

                } else {
                    // setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    // dispatch(nekoSetName(data.name));
                    // signInSuccess(dispatch, true);
                    // dispatch(RegisterActions.setSuccess(true));
                    // dispatch(ProfileActions.setToken(data.token));
                    dispatch(getPacks());

                    DEV_VERSION && console.log('Nya, addPack Success!', data)
                }

            },
            (e) => {
                // dispatch(RegisterActions.setError(e))
            },
            "addPack"
        );
    };
