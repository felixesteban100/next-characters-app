import Breadcrumbs from "@/app/ui/breadcrumbs";
import LoadingCharacterInfo from "@/app/ui/characters/loaders/LoadingCharacterInfo";

export default function Loading() {
    return (
        <section>
            <div className='w-[80vw] mx-auto'>
                <Breadcrumbs
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
                />
            </div>
            <div className='mb-5 lg:mb-0'>
                <LoadingCharacterInfo />
            </div>
        </section>
    )
}