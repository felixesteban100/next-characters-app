import CharactersContainer from "../CharactersContainer"
import LoadingCharactersCard from "./LoadingCharacterCard"
import LoadingPaginationCharacters from "./LoadingPaginationCharacters"

type LoadingCharactersProps = {
    howMany: number
    noPagination?: boolean
}

export default function LoadingCharacters({ howMany, noPagination = false }: LoadingCharactersProps) {
    return (
        <div
            // className='mx-auto w-[90vw] flex flex-col justify-between mb-5'
            className={`${noPagination === false ? "px-8 flex flex-col gap-10" : ""} `}
        >
            <div
            // className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'
            >
                <CharactersContainer>
                    <>
                        {
                            Array(howMany).fill(undefined).map((_, index) => {
                                return (
                                    <div key={index}>
                                        <LoadingCharactersCard />
                                    </div>
                                )
                            })
                        }
                    </>
                </CharactersContainer>

                {
                    noPagination &&
                    <div className="my-5 flex w-full justify-center">
                        <LoadingPaginationCharacters />
                    </div>
                }
            </div>
        </div>
    )
}

