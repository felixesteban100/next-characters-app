import { Character, QueryOptions } from "./definitions";
import { sortByType, sortDirectionType } from "../ui/characters/FilterCharacters";
import { CHARACTERS_PER_PAGE } from "./constants";
import { collectionCharacters } from "./mongodb/mongodb";

export async function fetchCharacterById(characterSelectedId: string) {
  // noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 7000));

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
  // noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 7000));
    const offset = (currentPage - 1) * CHARACTERS_PER_PAGE;

    const charactersToDisplay: Character[] = await collectionCharacters
      .find({ ...queryOptions })
      .sort({ [`${sortBy}`]: sortDirection as any })
      .skip(offset)
      // .limit(CHARACTERS_PER_PAGE)
      .toArray()
    return charactersToDisplay.slice(0, CHARACTERS_PER_PAGE)
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharactersNoPagination(
  queryOptions: QueryOptions,
  sortBy: sortByType,
  sortDirection: sortDirectionType
) {
  // noStore();
  try {
    const charactersToDisplay: Character[] = await collectionCharacters
      .find({ ...queryOptions })
      .sort({ [`${sortBy}`]: sortDirection as any })
      .limit(40)
      .toArray()
    return charactersToDisplay
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

export function getQueryOptions(
  characterName: string,
  side: string/* "All" | "good" | "bad" | "neutral" */,
  universe: string,
  team: string,
  gender: string/* "Both" | "Male" | "Female" */,
  race: string,
  // includeNameOrExactName: boolean,
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