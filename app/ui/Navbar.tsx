import { ModeToggle } from '@/components/mode-toogle';
import { Button } from '@/components/ui/button';
import { Atom, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import FilterCharacters from '@/app/ui/characters/FilterCharacters';
import PaginationToggle from './characters/PaginationToggle';

function Navbar({ link }: { link: string }) {
  return (
    <nav className='mx-auto flex justify-between gap-5 py-5 pt-16 px-5'>
      <div className='flex items-center justify-center gap-5'>
        {/* Radiation, Atom, ChevronsDown, Play*/}
        <Atom
          width={40}
          height={40}
          // className={`object-contain animate-spin1 text-primary`}
          className={`object-contain animate-spin1 text-primary`}
        />
      </div>

      <div className='flex justify-end gap-5'>
        {
          link !== "" ?
            <PaginationToggle />
            :
            null
        }
        {
          link !== "" ?
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}><SlidersHorizontal size={20} /></Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Features</SheetTitle>
                  <SheetDescription>
                    Here we can filter the characters
                  </SheetDescription>
                  <FilterCharacters
                    link={link}
                  />
                </SheetHeader>
              </SheetContent>
            </Sheet>
            :
            null
        }

        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar