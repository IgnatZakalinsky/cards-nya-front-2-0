export type CardType = {
    _id: string;
    cardsPack_id: string;

    answer: string;
    question: string;
    grade: number;
    shots: number;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}

export type CardsStateType = {
    cards: CardType[];
}

export const CardsInitState: CardsStateType = {
    cards: [],
};
