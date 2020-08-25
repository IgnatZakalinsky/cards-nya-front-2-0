import React from "react";
import {TableNyaModelType} from "../../../../cnf-0-common/c-1-ui/table/TableNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {CardType} from "../c-2-bll/CardsInitState";

export const cardsModel = (
    add: () => void,
    del: (id: string) => void,
    update: (id: string) => void,
): TableNyaModelType[] => [
    {
        title: (index, loading) => (
            <div key={'question-title-' + index} style={{width: 150}}>question</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'question-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.question}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'answer-title-' + index} style={{width: 150}}>answer</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'answer-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.answer}
            </div>
        )
    },

    {
        title: (index, loading) => (
            <div key={'grade-title-' + index} style={{width: 150}}>Grade</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'grade-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.grade}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'buttons-title-' + index} style={{width: 150}}>
                <ButtonNya onClick={add}>add</ButtonNya>
            </div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'buttons-cell-' + dataItem._id} style={{width: 250}}>
                <ButtonNya onClick={() => del(dataItem._id)}>del</ButtonNya>
                <ButtonNya onClick={() => update(dataItem._id)}>update</ButtonNya>
            </div>
        )
    },

];
