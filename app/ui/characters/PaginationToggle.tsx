'use client'

import { Button } from "@/components/ui/button"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

function PaginationToggle() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  function changePagination() {
    if(params.get("pagination")){
      params.set("pagination", (!(params.get("pagination") === "true")).toString())
    }else{
      params.set("pagination", ("false"))
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Button /* className="text-foreground hover:text-primary hover:no-underline text-2xl"  */onClick={() => changePagination()} variant={"outline"}>
      {params.get("pagination") === "true" || params.get("pagination") === null ? "Pagination" : "No pagination"}
    </Button>
  )
}

export default PaginationToggle