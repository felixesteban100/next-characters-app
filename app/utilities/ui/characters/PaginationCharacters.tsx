'use client';

import { generatePagination } from '@/app/utilities/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationCharacters({ totalPages }: { totalPages: number }) {
  // NOTE: comment in this code when you get to this point in the course
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('pageCharacters')) || 1

  const allPages = generatePagination(currentPage, totalPages);
  function createPageURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set('pageCharacters', pageNumber.toString())
    return `${pathname}?${params.toString()}`
    // replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <div className="inline-flex">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={createPageURL(currentPage - 1)}
              />
            </PaginationItem>
            {allPages.map((page, index) => {
              if (page === '...') return (
                <PaginationItem key={index}>
                  <PaginationEllipsis />
                </PaginationItem>
              );

              return (
                <PaginationItem key={index}>
                  <PaginationLink isActive={currentPage === page} href={createPageURL(page)}>{page}</PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext href={createPageURL(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {/* <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={index}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        /> */}
      </div>
    </>
  );
}