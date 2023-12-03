// import Breadcrumbs from "@/app/ui/breadcrumbs";
import LoadingCharacterInfo from "@/app/ui/characters/loaders/LoadingCharacterInfo";

export default function Loading() {
    return (
        <section className="w-[80vw] mx-auto">
            <div className='flex justify-end w-[95%] lg:w-[99%] mb-5'>
                {/* <Breadcrumbs
                    breadcrumbs={[
                        {
                            label: 'Characters',
                            // href: linkToCharactersPage
                        },
                        {
                            label: `Character-000`,
                            active: true,
                        },
                    ]}
                /> */}
            </div>
            <div>
                <LoadingCharacterInfo />
            </div>
        </section>
    )
}