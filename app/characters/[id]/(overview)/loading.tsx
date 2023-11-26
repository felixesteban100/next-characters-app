// import Breadcrumbs from "@/app/ui/breadcrumbs";
import Navbar from "@/app/ui/Navbar";
import LoadingCharacterInfo from "@/app/ui/characters/loaders/LoadingCharacterInfo";

export default function Loading() {
    return (
        <section className="w-[80vw] mx-auto">
            <Navbar
                link=""
            />
            <div className=''>
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