import { CHARACTERS_PER_PAGE } from "@/app/lib/constants"
import CharactersContainer from "../CharactersContainer"
import LoadingCharactersCard from "./LoadingCharactersCard"

export default function LoadingCharactersNoPagination() {
    return (
        <div className='mx-auto w-[90vw] flex flex-col justify-between mb-5'>
            <div className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'>
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
            </div>
        </div>
    )
}