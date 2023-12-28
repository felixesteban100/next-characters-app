import { CHARACTERS_PER_PAGE } from "@/app/utilities/lib/constants"
import CharactersContainer from "../CharactersContainer"
import LoadingCharactersCard from "./LoadingCharactersCard"
import LoadingPaginationCharacters from "./LoadingPaginationCharacters"

export default function LoadingCharacters() {
    return (
        <div 
            // className='mx-auto w-[90vw] flex flex-col justify-between mb-5'
            className='px-8 flex flex-col gap-10'
        >
            <div 
                // className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'
            >
                <CharactersContainer>
                    <>
                        {
                            Array(CHARACTERS_PER_PAGE).fill(undefined).map((_, index) => {
                                return (
                                    <div key={index}>
                                        <LoadingCharactersCard />
                                    </div>
                                )
                            })
                        }
                    </>
                </CharactersContainer>

                <div className="my-5 flex w-full justify-center">
                    <LoadingPaginationCharacters />
                </div>
            </div>
        </div>
    )
}