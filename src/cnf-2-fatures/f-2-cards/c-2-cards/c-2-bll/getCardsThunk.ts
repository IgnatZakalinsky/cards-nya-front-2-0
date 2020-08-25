import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {ProfileActions, ProfileActionsType} from "../../../f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {CardsAPI} from "../c-3-dal/CardsAPI";
import {CardsActions, CardsActionsType} from "./CardsActions";

export const getCards = (id: string): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType | CardsActionsType> =>
    async (
        dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType | CardsActionsType>,
        // getStore: GetAppStoreType
    ) => {
        // dispatch(RegisterActions.setLoading(true));

        await tryCatch(
            async () => {

                const data = await CardsAPI.getCards(id);

                // signInSuccess(dispatch, true);
                dispatch(CardsActions.setCards(data.cards));

                DEV_VERSION && console.log("Nya, getCards Success!", data)
            },
            (e) => {
                // dispatch(RegisterActions.setError(e))
            },
            "getCards"
        );
    };
