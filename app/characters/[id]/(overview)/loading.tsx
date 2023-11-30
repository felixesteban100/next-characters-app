// import Breadcrumbs from "@/app/ui/breadcrumbs";
import Navbar from "@/app/ui/Navbar";
import LoadingCharacterInfo from "@/app/ui/characters/loaders/LoadingCharacterInfo";
import { Button } from "@/components/ui/button";

export default function Loading() {
    return (
        <section className="w-[80vw] mx-auto">
            <Navbar
                link=""
            />
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
                <Button>Loading...</Button>
            </div>
            <div>
                <LoadingCharacterInfo />
            </div>
        </section>
    )
}