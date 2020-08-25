import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {CardType} from "../c-2-bll/CardsInitState";

export type DataType = {
    cards: CardType[];

    success: boolean;

    token: string;

    error: string;
}

export const CardsAPI = {
    getCards: async (token: string, cardsPack_id: string) => {
        const response = await instance.get<DataType>(`/cards/card?token=${token}&cardsPack_id=${cardsPack_id}`);

        return response.data;
    },
    addCard: async (token: string, cardsPack_id: string) => {
        const response = await instance.post<DataType>(`/cards/card`, {
            token,
            card: {
                cardsPack_id,
                question: 'new!',
                grade: Math.random() * 5,
                questionImg: 'some img'
            },
        });

        return response.data;
    },
    updateCard: async (token: string, id: string) => {
        const response = await instance.put<DataType>(`/cards/card`, {
            token,
            card: {
                _id: id,
                question: 'updated question',
                answerImg: 'some answer img'
            }
        });

        return response.data;
    },
    deleteCard: async (token: string, id: string) => {
        const response = await instance.delete<DataType>(`/cards/card?token=${token}&id=${id}`);

        return response.data;
    },

};
