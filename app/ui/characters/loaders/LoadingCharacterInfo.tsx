import LoadingCharacterFeatures from "./LoadingCharacterFeatures";

export default function LoadingCharacterInfo() {
    return (
        <>
            <div className="mx-auto w-[80vw] flex flex-col xl:flex-row justify-center items-center lg:items-start gap-0 lg:gap-11">
                <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto'>
                    <div
                        className="animate-pulse relative h-[70vh] w-[85vw] lg:w-96 lg:h-[34rem]  bg-muted-foreground shadow-xl rounded-md"
                    />

                    <div className='self-center mt-5'>
                        <h1
                            className={`text-2xl lg:text-5xl font-bold text-center h-5 bg-foreground animate-pulse w-[200px] rounded-md`}
                        />
                        <p
                            className={`py-2 text-center`}
                        >
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-[90%] lg:w-[70%] mx-auto mt-5 xl:mt-0 animate-pulse">
                    <LoadingCharacterFeatures />
                </div>
            </div>
        </>
    )
}