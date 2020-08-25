import React, {useEffect} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import TableNya, {TableNyaModelType} from "../../../../cnf-0-common/c-1-ui/table/TableNya";
import {getCards} from "../c-2-bll/getCardsThunk";
import {useParams} from "react-router-dom";
import {cardsModel} from "./CardsModel";
import {addCard} from "../c-2-bll/addCardThunk";
import {deleteCard} from "../c-2-bll/deleteCardThunk";
import {updateCard} from "../c-2-bll/updateCardThunk";

const CardsContainer = React.memo(() => {
    const {cards} = useSelector((store: AppStoreType) => store.cards);
    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('PacksContainer useEffect');

        dispatch(getCards(id));

        return () => {
            console.log('PacksContainer useEffect off');
        }
    }, [dispatch, id]);

    const model: TableNyaModelType[] = cardsModel(
        () => dispatch(addCard(id)),
        (card_id: string) => dispatch(deleteCard(card_id, id)),
        (card_id: string) => dispatch(updateCard(card_id, id)),
    );

    DEV_VERSION && console.log('render CardsContainer, id:' + id);
    return (
        <div>
            <TableNya model={model} data={cards} title={'Cards'}/>
        </div>
    )
});

export default CardsContainer;
