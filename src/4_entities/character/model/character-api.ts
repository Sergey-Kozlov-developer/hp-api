import {baseApi} from "@shared/api/base-api.ts";
import type {ICharacter, ICharacterParams, ICharactersResponse} from "@entities/character/model/type.ts";


export const characterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // получение всех персонажей
        getCharacters: builder.query<ICharactersResponse, ICharacterParams>({
            query: (params) => ({
                url: "/characters",
                params
            })
        }),
        // получение конкретного персонажа
        getCharacterById: builder.query<ICharacter, string>({
            query: (id) => ({
                url: `/character/${id}`
            })
        })
    })
})

export const {
    useGetCharactersQuery,
    useGetCharacterByIdQuery,
    useLazyGetCharacterByIdQuery,
} = characterApi;