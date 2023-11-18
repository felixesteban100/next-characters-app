import LoadingCharacters from "./LoadingCharacters";
import LoadingPaginationCharacters from "./LoadingPaginationCharacters";

export default function LoadingCharactersContent() {
    return (
        <div className='mx-auto w-[90vw] flex flex-col justify-between'>
            <div className='flex flex-col gap-5 justify-between items-center -mt-5 md:mt-0'>
                <LoadingCharacters />

                <div className="my-5 flex w-full justify-center animate-pulse">
                    <LoadingPaginationCharacters />
                </div>
            </div>
        </div>
    )
}