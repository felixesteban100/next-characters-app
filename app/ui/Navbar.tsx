import { ModeToggle } from '@/components/mode-toogle';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import FilterCharacters from '@/app/ui/characters/FilterCharacters';
import PaginationToggle from './characters/PaginationToggle';

function Navbar({ link }: { link: string }) {
  return (
    <nav className='mx-auto flex justify-end gap-5 py-5 pt-16 pr-5'>
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
    </nav>
  )
}

export default Navbar