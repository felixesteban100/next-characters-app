"use client";
import { useState, useEffect } from 'react'
import { fetchCharactersNoPagination } from '@/utilities/data'
import { sortByType, sortDirectionType } from './FilterCharacters';
import CharactersContainer from './CharactersContainer'
import { useInView } from 'react-intersection-observer'
import { CHARACTERS_PER_PAGE_NOPAGINATION } from '@/utilities/constants';
import LoadingCharactersCard from './loaders/LoadingCharacterCard';

type LoadMoreCharactersProps = {
    // initialCharacters: JSX.Element[]
    characterName: string;
    howMany: number;
    side: string
    universe: string
    team: string
    gender: string
    race: string
    characterOrFullName: boolean

    sortBy: sortByType
    sortDirection: sortDirectionType
}

export default function LoadMoreCharacters({ /* initialCharacters, */ howMany, characterName, side, universe, team, gender, race, characterOrFullName, sortBy, sortDirection }: LoadMoreCharactersProps) {
    const [characters, setCharacters] = useState<JSX.Element[]>([])
    const { ref, inView } = useInView()
    const [noMore, setNoMore] = useState(true)
    const [idsAlreadyFetched, setIdsAlreadyFetched] = useState<number[]>([])

    useEffect(() => {
        if (inView === true && noMore === true && characters.length < howMany) {
            fetchCharactersNoPagination(idsAlreadyFetched, characterName, side, universe, team, gender, race, characterOrFullName, sortBy, sortDirection).then((data) => {
                setCharacters([...characters, ...data.otherCharacters])
                setIdsAlreadyFetched((prev) => {
                    return [...prev, ...data.otherIds]
                })
                if (data.otherCharacters.length < 1) setNoMore(false)
            })
        }

        if (howMany < characters.length) {
            setCharacters(characters.slice(0, howMany))
        }
    }, [inView, /* characters, howMany, characterName, side, universe, team, gender, race, characterOrFullName, noMore, sortBy, sortDirection, idsAlreadyFetched */])


    return (
        <>
            <CharactersContainer>
                <>
                    {characters}
                    {(noMore === true && characters.length < howMany) ?
                        Array(CHARACTERS_PER_PAGE_NOPAGINATION).fill(undefined).map((_, index) => {
                            return (
                                <div key={index} ref={index === 0 ? ref : undefined}>
                                    <LoadingCharactersCard />
                                </div>
                            )
                        })
                        : null
                    }
                </>
            </CharactersContainer>
        </>
    )
}