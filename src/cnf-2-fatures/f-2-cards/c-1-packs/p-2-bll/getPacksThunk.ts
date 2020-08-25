import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {PacksAPI} from "../p-3-dal/PacksAPI";
import {ProfileActions, ProfileActionsType} from "../../../f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {PacksActions, PacksActionsType} from "./PacksActions";

export const getPacks = (): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType | PacksActionsType> =>
    async (
        dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType | PacksActionsType>,
        getStore: GetAppStoreType
    ) => {
        // nekoClear(dispatch);
        // signInLoading(dispatch, true);
        // dispatch(RegisterActions.setLoading(true));

        await tryCatch(
            async () => {

                const data = await PacksAPI.getPacks();

                if (data.error) {
                    // dispatch(RegisterActions.setError(data.error));

                    DEV_VERSION && console.log('Nya, getPacks Error!', data);

                } else {
                    // setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    // dispatch(nekoSetName(data.name));
                    // signInSuccess(dispatch, true);
                    dispatch(PacksActions.setPacks(data.cardPacks));
                    // dispatch(ProfileActions.setToken(data.token));

                    DEV_VERSION && console.log('Nya, getPacks Success!', data)
                }

            },
            (e) => {
                // dispatch(RegisterActions.setError(e))
            },
            "getPacks"
        );
    };
