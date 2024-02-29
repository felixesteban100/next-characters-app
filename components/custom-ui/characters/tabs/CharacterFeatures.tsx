import { Character } from "@/utilities/lib/definitions";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureTabStats from "./FeatureTabStats";
import FeatureTabAppereance from "./FeatureTabAppereance";
import FeatureTabBiography from "./FeatureTabBiography";
import FeatureTabTeams from "./FeatureTabTeams";
import FeatureTabComics from "./FeatureTabComics";
import { BarChart4, Eye, Library, PictureInPicture } from "lucide-react";
import { GrGroup } from "react-icons/gr";

type CharacterFeaturesProps = {
    selectedCharacter: Character,
    withPagination: boolean
}

function CharacterFeatures({ selectedCharacter, withPagination }: CharacterFeaturesProps) {
    return (
        <Tabs
            defaultValue={'Stats'}
            //col-span-5
            className="h-[80vh] w-full lg:w-[70%] md:flex-initial"
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger className='text-base-content hidden md:block' value="Stats">Stats</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Stats"><BarChart4 size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Appereance">Appereance</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Appereance"><Eye size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Biography">Biography</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Biography"><Library size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Teams">Teams</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Teams"><GrGroup size={20} /></TabsTrigger>
                <TabsTrigger className='text-base-content hidden md:block' value="Comics">Comics</TabsTrigger>
                <TabsTrigger className='text-base-content md:hidden flex justify-center' value="Comics"><PictureInPicture size={20} /></TabsTrigger>
            </TabsList>
            <FeatureTabStats selectedCharacter={selectedCharacter}/>
            <FeatureTabAppereance selectedCharacter={selectedCharacter}/>
            <FeatureTabBiography selectedCharacter={selectedCharacter}/>
            <FeatureTabTeams selectedCharacter={selectedCharacter} withPagination={withPagination}/>
            <FeatureTabComics selectedCharacter={selectedCharacter} withPagination={withPagination} />
        </Tabs>
    )
}

export default CharacterFeatures