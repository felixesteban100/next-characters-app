'use server' // I have to write this because this is a .jsx not .ts file

import { Character, QueryOptions } from "./definitions";
import { sortByType, sortDirectionType } from "../ui/characters/FilterCharacters";
import { CHARACTERS_PER_PAGE, CHARACTERS_PER_PAGE_NOPAGINATION } from "./constants";
import { collectionCharacters } from "./mongodb/mongodb";
import CharacterComponent from "../ui/characters/CharacterComponent";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchCharacterById(characterSelectedId: string) {
  // noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log("fetchCharacterById")
    const selectedCharacter = await collectionCharacters.findOne({ id: parseInt(characterSelectedId) })
    return selectedCharacter
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharacters(
  queryOptions: QueryOptions,
  currentPage: number,
  sortBy: sortByType,
  sortDirection: sortDirectionType
) {
  

  try {
    // await new Promise((resolve) => setTimeout(resolve, 7000));
    const offset = (currentPage - 1) * CHARACTERS_PER_PAGE;

    let charactersToDisplay: Character[] = await collectionCharacters
      .find({ ...queryOptions })
      .sort({ [`${sortBy}`]: sortDirection as any })
      .skip(offset)
      .toArray()

    if (sortBy === 'random') {
      // noStore();
      return charactersToDisplay.sort(() => 0.5 - Math.random()).slice(0, CHARACTERS_PER_PAGE)
    }

    return charactersToDisplay.slice(0, CHARACTERS_PER_PAGE)
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharactersNoPagination(
  characterName: string,
  side: string,
  universe: string,
  team: string,
  gender: string,
  race: string,
  characterOrFullName: boolean,

  sortBy: sortByType,
  sortDirection: sortDirectionType,
  currentPage: number
) {
  const queryOptions = await getQueryOptions(characterName, side, universe, team, gender, race, characterOrFullName)
  

  try {
    const offset = (currentPage - 1) * CHARACTERS_PER_PAGE_NOPAGINATION;
    const charactersToDisplay: Character[] = await collectionCharacters
      .find({ ...queryOptions })
      .sort({ [`${sortBy}`]: sortDirection as any })
      .skip(offset)
      .toArray()

    if (sortBy === "random") {
      noStore();

      return charactersToDisplay.sort(() => 0.5 - Math.random()).slice(0, CHARACTERS_PER_PAGE_NOPAGINATION).reduce((a, b) => { 
        if(a.indexOf(b) < 0) a.push(b);
        return a
      }, new Array()).map((currentCharacter, index) => {
        return (
          <CharacterComponent
            key={currentCharacter.slug}
            index={index}
            currentCharacter={JSON.parse(JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() }))}
            withPagination={false}
          />
        )
      })
    }

    return charactersToDisplay.slice(0, CHARACTERS_PER_PAGE_NOPAGINATION).map((currentCharacter, index) => {
      return (
        <CharacterComponent
          key={currentCharacter.slug}
          index={index}
          currentCharacter={JSON.parse(JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() }))}
          withPagination={false}
        />
      )
    })
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchPages(
  queryOptions: QueryOptions
) {
  // noStore()
  try {
    const characterdDisplayLenght = await collectionCharacters.countDocuments(queryOptions)
    const totalPages = Math.ceil(characterdDisplayLenght / CHARACTERS_PER_PAGE);
    return totalPages
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async /* make this async even though I am now using async code in here (becasuse it's a .tsx file not .ts) */ function getQueryOptions(
  characterName: string,
  side: string,
  universe: string,
  team: string,
  gender: string,
  race: string,
  characterOrFullName: boolean
) {
  const queryOptions: QueryOptions = {};
  if (characterName !== "") {
    if (characterOrFullName === false) {
      queryOptions.name = new RegExp(characterName, "ig")
    } else {
      queryOptions["biography.fullName"] = new RegExp(characterName, "ig")
    }
  }

  if (side !== "All") queryOptions["biography.alignment"] = side;
  if (universe !== "All") {
    queryOptions["biography.publisher"] = universe;
    if (team !== "All")
      queryOptions["connections.groupAffiliation"] = new RegExp(team, "ig");
  }
  if (gender !== "both") queryOptions["appearance.gender"] = gender;
  if (race !== "All") queryOptions["appearance.race"] = race;

  return queryOptions;
}