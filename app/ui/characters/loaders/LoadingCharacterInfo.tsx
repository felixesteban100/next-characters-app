import LoadingCharacterFeatures from "./LoadingCharacterFeatures";

export default function LoadingCharacterInfo() {
    return (
        <>
            <div className="mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-5">
                {/* <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto'> */}
                    <div
                        className="animate-pulse w-full lg:w-[30%] h-[75vh] shadow-xl rounded-md transition-all duration-300 lg:flex-none bg-secondary"
                    />

                    {/* <div className='self-center mt-5'>
                        <h1
                            className={`text-2xl lg:text-5xl font-bold text-center h-5 bg-foreground animate-pulse w-[200px] rounded-md`}
                        />
                    </div> */}
                {/* </div> */}

                <div className="flex flex-col w-[90%] lg:w-[70%] mx-auto xl:mt-0 animate-pulse">
                    <LoadingCharacterFeatures />
                </div>
            </div>
        </>
    )
}