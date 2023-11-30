"use client";

import { fetchCharactersNoPagination } from '@/app/lib/data'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { sortByType, sortDirectionType } from './FilterCharacters'
import CharactersContainer from './CharactersContainer'

type LoadMoreCharactersProps = {
    characterName: string
    side: string
    universe: string
    team: string
    gender: string
    race: string
    characterOrFullName: boolean
    sortBy: sortByType
    sortDirection: sortDirectionType,
}

// It seems like I can't use signals
// const page: Signal<number> = signal(1)
// function addPage(){
//     page.value += 1
// }

export default function LoadMoreCharacters({ characterName, side, universe, team, gender, race, characterOrFullName, sortBy, sortDirection }: LoadMoreCharactersProps) {
    const [newCharacters, setNewCharacters] = useState<JSX.Element[]>([])
    const { ref, inView } = useInView()
    const [noMore, setNoMore] = useState(true)
    const [page, setPage] = useState(1)
    // console.log(page.value)

    useEffect(() => {
        if (inView === true && noMore === true) {
            fetchCharactersNoPagination(characterName, side, universe, team, gender, race, characterOrFullName,/* JSON.parse(queryOptions), */ sortBy, sortDirection, page).then((data) => {
                setNewCharacters([...newCharacters, ...data])
                setPage(prev => prev + 1);
                if(data.length < 1) setNoMore(false)
            })
        }
    }, [inView, newCharacters, characterName, side, universe, team, gender, race, characterOrFullName])

    return (
        <>
            <CharactersContainer>
                <>
                    {newCharacters}
                </>
            </CharactersContainer>
            {noMore === true && <div ref={ref} className="w-full flex justify-center mb-16">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-20 h-20 text-secondary animate-spin dark:text-secondary fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
        </>
    )
}

/* <div ref={ref} className="w-full"><LoadingCharacters /></div> */

/* 
{
                        newCharacters.map((currentCharacter, index) => {
                            return (
                                <CharacterComponent
                                    key={currentCharacter.slug}
                                    index={index}
                                    currentCharacter={JSON.parse(JSON.stringify({ ...currentCharacter, _id: currentCharacter._id.toString() }))}
                                    withPagination={false}
                                />
                            )
                        })
                    } */