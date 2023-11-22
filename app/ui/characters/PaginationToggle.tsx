'use client'

import { Button } from "@/components/ui/button"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

function PaginationToggle() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  function changePagination() {
    params.set("pagination", (!(params.get("pagination") === "true")).toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Button onClick={() => changePagination()} variant={"outline"}>
      {params.get("pagination") === "true" ? "Pagination" : "No pagination"}
    </Button>
  )
}

export default PaginationToggle