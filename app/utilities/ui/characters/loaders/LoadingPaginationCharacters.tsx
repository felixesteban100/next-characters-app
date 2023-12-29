// import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
// import clsx from 'clsx';

'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function LoadingPaginationCharacters() {
    // const allPages2 = generatePagination(1, 179)
    // console.log(allPages2)

    const allPages = [1, 2, 3, '...', 178, 179]

    return (
        <div className="inline-flex">
            <div className="inline-flex">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                            />
                        </PaginationItem>
                        {new Array(4).fill(undefined).map((_, index) => {
                            if (index === 0) return

                            return (
                                <PaginationItem key={index}>
                                    <PaginationLink href="#">{index}</PaginationLink>
                                </PaginationItem>
                            );
                        })}
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">181</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">182</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
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
            {/* <div className={'flex h-10 w-10 items-center justify-center rounded-md border pointer-events-none text-foreground/30 mr-2 md:mr-4'}><ArrowLeftIcon className="w-4" /></div>

            <div className="flex -space-x-px">
                {allPages.map((page, index) => {
                    let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                    if (index === 0) position = 'first';
                    if (index === allPages.length - 1) position = 'last';
                    if (allPages.length === 1) position = 'single';
                    if (page === '...') position = 'middle';

                    const className = clsx(
                        'flex h-10 w-10 items-center justify-center text-sm border',
                        {
                          'rounded-l-md': position === 'first' || position === 'single',
                          'rounded-r-md': position === 'last' || position === 'single',
                          'text-gray-300': position === 'middle',
                        },
                      );

                    return (
                        <div key={page} className={className}></div>
                    );
                })}
            </div>

            <div className={'flex h-10 w-10 items-center justify-center rounded-md border pointer-events-none text-foreground/30 ml-2 md:ml-4'}><ArrowRightIcon className="w-4" /></div> */}

        </div>
    )
}