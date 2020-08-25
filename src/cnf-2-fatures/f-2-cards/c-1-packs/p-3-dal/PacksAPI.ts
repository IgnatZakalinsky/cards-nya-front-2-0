import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {PackType} from "../p-2-bll/PacksInitState";

export type GetDataType = {
    cardPacks: PackType[];

    error: string;
}

export const PacksAPI = {
    getPacks: async () => {
        const response = await instance.get<GetDataType>(
            `/cards/pack?`
            + `pageCount=1000`
            + `&page=4`
            + `&user_id=5eecf82a3ed8f700042f1186`
            // + `&packName=o`
        );

        return response.data;
    },
    addPack: async (token: string) => {
        const response = await instance.post<any>(`/cards/pack`, {
            token,
            cardsPack: {
                deckCover: 'some cover'
            }
        });

        return response.data;
    },
    updatePack: async (token: string, id: string) => {
        const response = await instance.put<any>(`/cards/pack`, {
            token,
            cardsPack: {
                _id: id,
                name: 'update new',
            }
        });

        return response.data;
    },
    deletePack: async (token: string, id: string) => {
        const response = await instance.delete<any>(`/cards/pack?token=${token}&id=${id}`);

        return response.data;
    },

};
