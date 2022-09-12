import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {PackType} from "../p-2-bll/PacksInitState";

export type GetDataType = {
    cardPacks: PackType[];

    error: string;
}

export const PacksAPI = {
    getPacks: async (packUser_id: string) => {
        const response = await instance.get<GetDataType>(
            `/cards/pack?`
            + `pageCount=1000`
            + `&page=1`
            + (packUser_id && `&user_id=${packUser_id}`)
            // + `&packName=o`
            // + `&min=2`
            // + `&max=2`
            + `&sortPacks=0updated`
        );

        return response.data;
    },
    addPack: async () => {
        const response = await instance.post<any>("/cards/pack", {
            cardsPack: {
                name: "new pack 2.0",
            }
        });

        return response.data;
    },
    updatePack: async (id: string) => {
        const response = await instance.put<any>("/cards/pack", {
            cardsPack: {
                _id: id,
                name: "update new pack 2.0",
                deckCover: "",
            }
        });

        return response.data;
    },
    deletePack: async (id: string) => {
        const response = await instance.delete<any>(`/cards/pack?id=${id}`);

        return response.data;
    },

};
