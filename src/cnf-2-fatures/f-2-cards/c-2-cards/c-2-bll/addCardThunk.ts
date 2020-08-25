import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {ProfileActionsType} from "../../../f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {CardsAPI} from "../c-3-dal/CardsAPI";
import {getCards} from "./getCardsThunk";

export const addCard = (id: string): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> =>
    async (
        dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType>,
        // getStore: GetAppStoreType
    ) => {
        // dispatch(RegisterActions.setLoading(true));

        await tryCatch(
            async () => {

                const data = await CardsAPI.addCard(id);
                // dispatch(RegisterActions.setSuccess(true));
                dispatch(getCards(id));

                DEV_VERSION && console.log("Nya, addCard Success!", data);
            },
            (e) => {
                // dispatch(RegisterActions.setError(e))
            },
            "addCard"
        );
    };
