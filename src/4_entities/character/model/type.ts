export interface ICharacter {
    id: string;
    name: string;
    alternative_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
}

export type ICharactersResponse = ICharacter[];

export interface ICharacterParams {
    name?: string;
    actor?: string;
}