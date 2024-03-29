import FeatureTabContainer from "./FeatureTabContainer"
// import Image from "next/image"
import CarouselCharacterImages from "../CarouselCharacterImage"
import { getJustTheImagesFromTheImagesObject } from "@/utilities/charactersUtils"


type FeatureTabComicsProps = {
    selectedCharacter: Character;
    withPagination: boolean;
    image: string;
}

function FeatureTabComics({ selectedCharacter, withPagination, image }: FeatureTabComicsProps) {
    const images = Object.entries(organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).slice().sort(() => Math.random() - 0.5)).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => { return {key: c[0], value: c[1]} })

    const allImages: { key: string, value: string }[] = [
        {
            key: image,
            value: selectedCharacter.images[image],
        },
        ...getJustTheImagesFromTheImagesObject(selectedCharacter.images, image)
    ]

    return (
        <FeatureTabContainer
            valueTab="Comics"
            extraClassNames="border-2"
        >
            <>
                <CarouselCharacterImages
                    // allImagesInfo={allImagesInfo}
                    allImages={allImages}
                    withPagination={withPagination}
                    characterName={selectedCharacter.name}
                    characterId={selectedCharacter.id.toString()}
                    label={'Character'}
                    changeImage={true}
                />

                <CarouselCharacterImages
                    // allImagesInfo={allImagesInfo}
                    allImages={images}
                    withPagination={withPagination}
                    characterName={selectedCharacter.name}
                    characterId={selectedCharacter.id.toString()}
                    label={'Comics'}
                />


                {/* <div className='md:w-[50%] flex justify-center mx-auto mt-5'>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
                        {images.map((comic, index) => {
                            return (
                                <Image
                                    key={`comic-${index}`}
                                    className="h-auto w-full"
                                    src={comic.value}
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    alt={`comic-${index}`}
                                />
                            )
                        })}
                    </div>
                </div> */}
            </>
        </FeatureTabContainer>
    )
}


export function organizedComicsProperty(
    comics: string[] | null | undefined,
    publisher: string
): string[] {
    if (comics === undefined || comics === null) {
        switch (publisher) {
            case "Marvel Comics":
                return [
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/8/c0/4cd03c90ea371/clean.jpg",
                    "https://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff/clean.jpg",
                    "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/5d5aaf2e85d4d/clean.jpg",
                    "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                    // "https://images.saymedia-content.com/.image/t_share/MTc0MzA1MTk3OTc4Mjk4MjM2/getting-into-comics-a-general-guide.jpg",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/f/90/64ecae4a89ba7/clean.jpg",
                    "https://2.bp.blogspot.com/VgE-mzd8ctoEG3S--deLN57u5tZ4tT2fCIixOS8qiGoK83Nyi9TQpF_tQIM6K7ohGRF0TpQREeQ-=s0?rhlupa=MjcuNjcuMTQyLjI0Nw&rnvuka=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDUuMC4yOyBBU1VTX1owMExEIEJ1aWxkL0xSWDIyRykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzYwLjAuMzExMi4xMTYgTW9iaWxlIFNhZmFyaS81MzcuMzY=",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/5863dd6a70a67/clean.jpg",
                    "https://media.comicbook.com/uploads1/2014/11/super-villain-team-up-14-cover-113584.jpg",
                ];

            case "DC Comics":
                return [
                    "https://cdn.europosters.eu/image/1300/julisteet/dc-comics-collage-i15088.jpg",
                    // "http://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Justice_League_of_America_poster_Issue_1.jpg",
                    "https://d.newsweek.com/en/full/975273/heroes-crisis-tom-king-clay-mann-dc-comics.jpg",
                    "https://i.pinimg.com/originals/02/fb/e3/02fbe3db4a82b9b15c9afefe2b9799a9.png",
                    "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/05/9781608878321.jpg?fit=696%2C862&quality=80&strip=info&ssl=1",
                    "https://www.previewsworld.com/news_images/177217_889486_3.jpg",
                    "https://m.media-amazon.com/images/I/A1wC3pAqT1L._AC_UF1000,1000_QL80_.jpg",
                    "https://jafcomics.com/cdn/shop/products/83016dbf-2d9c-4240-940b-106388de85a0.jpg?v=1674396057",
                    "https://cdn11.bigcommerce.com/s-y48kcaxngv/images/stencil/1280x1280/products/6939/8340/Justice_League_34__88416.1671205006.jpg?c=1",
                ];

            case "Shueisha":
                return [
                    "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                    "https://m.media-amazon.com/images/I/81X5Wy1uMUL._AC_UF1000,1000_QL80_.jpg",
                    "https://pbs.twimg.com/media/FslBjwGWIAElbQv.jpg:large",
                    "https://pbs.twimg.com/media/DbefO60WkAA83cL?format=jpg&name=900x900",
                ];

            case "IDW Publishing":
                return [
                    "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1643902801105-VUT092WGQWT7VUD66Y8M/Teenage+Mutant+Ninja+Turtles+Reborn+Vol.+1.jpg?format=1000w",
                    "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2066186.jpg",
                    "https://static.dc.com/dc/files/default_images/BMTMNT_tp_58cb173a8b8fd6.32122101.jpg",
                    "https://m.media-amazon.com/images/I/61O+P3mEyZL.jpg",
                ];

            case "George Lucas":
                return [
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/c/00/5ff32d6aad522/clean.jpg",
                    "https://tools.toywiz.com/_images/_webp/_products/lg/apr221023.webp",
                    "https://i0.wp.com/MynockManor.com/wp-content/uploads/2020/11/Star-Wars-11-Full-Cover-Vol-2.jpeg?ssl=1",
                    "https://storage.googleapis.com/hipcomic/p/007ce152f644d7971541cb74253b82cf.jpg",
                ];

            case 'Super Sentai':
                return [
                    "https://m.media-amazon.com/images/I/71eevKo5wwL._AC_UF1000,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/I/91aypLcyUZL._AC_UF1000,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/I/91nMdRAbRgL._AC_UF1000,1000_QL80_.jpg",
                    "https://m.media-amazon.com/images/M/MV5BZmI1NWU4OTAtNGYxNi00NjUxLTgwNzktZTNiNTNjMWYzYmFlXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_FMjpg_UX1000_.jpg",
                    "https://rangercentral.com/database/2003_ninjastorm/images/data-top-prns.jpg",
                    "https://down-id.img.susercontent.com/file/3ea0350a8f5740d63c9b52baa23df007",
                    "https://preview.redd.it/so-spd-takes-place-in-2025-which-is-just-a-couple-years-v0-64wq5od2e5qa1.jpg?width=640&crop=smart&auto=webp&s=e28cbbb3a9f98c7e661efdda388dcf4a940b80ec",
                    "https://static.wikia.nocookie.net/maswartz-powerverse/images/1/13/MysticForce.jpg/revision/latest?cb=20180815215643",
                    "https://2.bp.blogspot.com/-mQYRzr3fJhU/T15nTBfC_5I/AAAAAAAAC8c/UOGc53cQcUA/s1600/Power+Rangers+Operation+Overdrive.jpg",
                    "https://3.bp.blogspot.com/-n0hYRpfNkpY/TdOuacfwnfI/AAAAAAAABcs/dou6CuqyW8E/s1600/PowerRangersJungleWallpaper800.jpg",
                    "https://images.purexbox.com/a24c51835112f/1280x720.jpg",
                ]

            default:
                return [
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                ];
        }
    }

    return comics;
}

export default FeatureTabComics