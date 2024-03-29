'use server' // I have to write this because this is a .jsx not .ts file

import { sortByType, sortDirectionType } from "@/components/custom-ui/characters/FilterCharacters";
import { CHARACTERS_PER_PAGE, CHARACTERS_PER_PAGE_NOPAGINATION } from "./constants";
import { collectionCharacters } from "./mongodb/mongodb";
import CharacterComponent from "@/components/custom-ui/characters/CharacterComponent";
import { unstable_noStore as noStore } from "next/cache";
import { Sort } from "mongodb";
import { getRandomImage } from "./charactersUtils";

export async function fetchCharacterById(characterSelectedId: string) {
  // noStore();
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const selectedCharacter = await collectionCharacters.findOne({ id: parseInt(characterSelectedId) })
    return selectedCharacter
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharacterByIds(charactersIds: number[]) {
  // noStore();
  // await new Promise((resolve) => setTimeout(resolve, 7000));
  try {
    const selectedCharacter = await collectionCharacters.find({ id: { '$in': charactersIds } }).toArray()
    return selectedCharacter
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function getRandomIdRecursively() {
  // noStore();
  // await new Promise((resolve) => setTimeout(resolve, 7000));
  // const randomCharacter = await fetchCharacterByName((Math.floor(Math.random() * 780) + 1).toString())
  const randomCharacter = await fetchCharacterById((Math.floor(Math.random() * 780) + 1).toString())

  if (!randomCharacter) {
    return getRandomIdRecursively()
  }

  return randomCharacter?.id.toString()
}

export async function fetchCharacterByName(characterSelectedName: string) {
  // noStore();
  try {
    const regex = new RegExp(characterSelectedName, "ig");
    const selectedCharacter = await collectionCharacters.findOne({ name: regex })
    return selectedCharacter
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharacterByNameToSearch(characterSelectedName: string) {
  // noStore();
  try {
    const regex = new RegExp(characterSelectedName, "ig");
    const selectedCharacters = await collectionCharacters.find({ name: regex }).limit(10).toArray()
    const result = selectedCharacters.map(c => {
      return { name: c.name, id: c.id }
    })

    return result
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
    // await new Promise((resolve) => setTimeout(resolve, 4000));
    const offset = (currentPage - 1) * CHARACTERS_PER_PAGE;

    let charactersToDisplay: Character[] = await collectionCharacters
      .find({ ...queryOptions })
      .sort(sortBy !== 'random' ? { [`${sortBy}`]: sortDirection } as Sort : {})
      .limit(CHARACTERS_PER_PAGE)
      .skip(offset)
      .toArray()

    const characterOfThePage = charactersToDisplay

    if (sortBy === "random") {
      noStore();
      return characterOfThePage.sort(() => 0.5 - Math.random())
    }

    return characterOfThePage
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function fetchCharactersNoPagination(
  alreadyFetchedIds: number[],
  characterName: string,
  side: string,
  universe: string,
  team: string,
  gender: string,
  race: string,
  characterOrFullName: boolean,
  sortBy: sortByType,
  sortDirection: sortDirectionType,
) {
  // noStore();

  const queryOptions = await getQueryOptions(characterName, side, universe, team, gender, race, characterOrFullName)
  try {
    const charactersToDisplay: Character[] = await collectionCharacters
      .find({ ...queryOptions, id: { '$nin': [...alreadyFetchedIds] } })
      .sort({ [`${sortBy}`]: sortDirection as any })
      .toArray()

    let charactersToSend = charactersToDisplay.slice(0, CHARACTERS_PER_PAGE_NOPAGINATION)

    if (sortBy === "random") {
      noStore();
      charactersToSend = charactersToDisplay.sort(() => 0.5 - Math.random()).slice(0, CHARACTERS_PER_PAGE_NOPAGINATION)
    }

    const otherCharacters = await getCharacterComponents(charactersToSend)

    return {
      otherIds: charactersToSend.map(c => c.id),
      otherCharacters: otherCharacters
    }

  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}


async function getCharacterComponents(charactersToSend: Character[]) {
  const result: JSX.Element[] = []

  for (let index = 0; index < charactersToSend.length; index++) {
    const currentCharacter = charactersToSend[index]
    const randomImage = await getRandomImage(currentCharacter)

    result.push((
      <CharacterComponent
        key={currentCharacter.slug}
        index={index}
        currentCharacter={JSON.parse(JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() }))}
        withPagination={false}
        // randomImage={{ selectedRandomImage: allImages[Math.floor(Math.random() * allImages.length)], blurSelectedRandomImage: BASE_42_IMAGE }}
        randomImage={randomImage}
      />
    ))
  }

  return result
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

  const characterNames = characterName.split(',')

  if (characterNames.length > 1) {
    const names: string = characterNames.reduce((acc, name, index) => {
      if(index > 0){
        acc = `${acc}|${name.trim()}`
      }else{
        acc = `${name}`
      }
      return acc
    }, "")

    if (characterOrFullName === false) {
      queryOptions.name = new RegExp(names, "ig")
    } else {
      queryOptions["biography.fullName"] = new RegExp(names, "ig")
    }
  } else {
    if (characterName !== "") {
      if (characterOrFullName === false) {
        queryOptions.name = new RegExp(characterName, "ig")
      } else {
        queryOptions["biography.fullName"] = new RegExp(characterName, "ig")
      }
    }
  }

  if (side !== "All") queryOptions["biography.alignment"] = side;
  if (universe !== "All") {
    queryOptions["biography.publisher"] = universe;
    if (team !== "All")
      // fix this so that the filters like the avengers doesn't add characters like green goblin because he has the dark avengers
      queryOptions["connections.groupAffiliation"] = new RegExp(team, 'g');/* new RegExp(`^(\\b${team}\\b|[ ,]${team}\\b)`, "i"); */
  }
  if (gender !== "both") queryOptions["appearance.gender"] = gender;
  if (race !== "All") queryOptions["appearance.race"] = new RegExp(race, 'ig');

  return queryOptions;
}

export default async function fetchCharactersTop(attributes: CharacterAttributes, numberOfTop: number, fixedAttribute: string, order: 'asc' | 'desc') {
  const removeAttributesWithAll = await removeAttributesAll(attributes)

  try {
    const characters: Character[] = await collectionCharacters
      .find({ ...removeAttributesWithAll })
      .sort({ [`${fixedAttribute}`]: order })
      .limit(numberOfTop)
      .toArray()

    return characters
  } catch (error) {
    console.error(error);
    throw Error(`MongoDB Connection Error: ${error}`);
  }
}

export async function removeAttributesAll(attributes: CharacterAttributes) {
  return Object.entries(attributes).reduce((acc, [key, value]) => {
    if ((value !== "All" && value !== 'both')) {
      if (key === 'appearance.race' || key === 'connections.groupAffiliation') {
        acc[key] = new RegExp(value, 'ig')
      } else {
        acc[key] = value
      }
    }
    return acc
  }, {} as Record<string, string | RegExp>)
}

export async function removeAttributesAllJustValues(attributes: CharacterAttributes): Promise<{ [key: string]: string }> {
  return Object.fromEntries(Object.entries(attributes).filter(([_, value]) => (value !== "All" && value !== 'both')));
}