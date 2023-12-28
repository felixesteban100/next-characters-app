
type CharactersContainerProps = {
    children: JSX.Element
}
function CharactersContainer({ children }: CharactersContainerProps) {

    return (
        <div
        //min-h-[82vh] lg:mt-7 m-0 md:min-h-[85vh] pt-[5rem] md:pt-[2rem] 
        // grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
        /* w-[100%] sm:w-[90%] md:w-[90%] lg:w-[90%] 
                h-[90%]
                min-h-fit 
                
                grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
                justify-center items-center
                gap-10 gap-y-12 mx-auto 
                mt-10
                */
        className={
                `
                grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10
                mb-10
                `
            }
        >
            {children}
        </div>
    )
}

export default CharactersContainer