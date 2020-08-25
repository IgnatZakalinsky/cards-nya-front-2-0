import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {CardType} from "../c-2-bll/CardsInitState";

export type GetDataType = {
    cards: CardType[];

    error: string;
}

export const CardsAPI = {
    getCards: async (cardsPack_id: string) => {
        const response = await instance.get<GetDataType>(`/cards/card?cardsPack_id=${cardsPack_id}`
        // + "&pageCount=2"
        // + "&cardQuestion=ne"
        // + "&min=2"
        // + "&max=3"
        );

        return response.data;
    },
    addCard: async (token: string, cardsPack_id: string) => {
        const response = await instance.post<any>(`/cards/card`, {
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
        const response = await instance.put<any>(`/cards/card`, {
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
        const response = await instance.delete<any>(`/cards/card?token=${token}&id=${id}`);

        return response.data;
    },

};
