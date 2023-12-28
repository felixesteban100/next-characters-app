// "use client";

import { FileWarning } from "lucide-react";

export default function NoCharactersFound() {
    // const searchParams = useSearchParams()
    // console.log(searchParams.get("name"))

    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full my-10 mb-28">
            <FileWarning className="w-10 text-gray-400" />
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>Could not find based on the requested info</p>
            {/* <ul>
                {
                    searchParams.getAll("").map((c) => {
                        return(
                            <li>
                                <p>{c}</p>
                                <p>{c}</p>
                            </li>
                        )
                    })
                }
            </ul> */}
            {/* <p className="font-bold">URL:</p>
            <div className="flex-grow-0 break-all">{searchParams.toString()}</div> */}
        </div>
    )
}