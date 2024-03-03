declare type Character = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string;
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
}

declare type QueryOptions = {
    name?: /* string | */ RegExp /* | string[] */ /* | RegExp[] */;
    "biography.fullName"?: /* string | */ RegExp /* | RegExp[] */;
    "biography.alignment"?: string;
    "biography.publisher"?: string;
    "connections.groupAffiliation"?: string | RegExp;
    "appearance.gender"?: string;
    "appearance.race"?: string | RegExp;
};
/* {
    [key: string]: any;
  } */


declare type CharacterInfo = {
    // name: string;
    // id: string;
    link: string
} & Character

declare type CharacterAttributes = {
    'connections.groupAffiliation': string,
    'biography.alignment': string,
    'appearance.gender': string,
    'appearance.race': string,
    'biography.publisher': string
}

declare type RandomImage = { selectedRandomImage: { key: string, value: string }, blurSelectedRandomImage: string }