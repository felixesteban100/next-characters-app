import { ModeToggle } from '@/components/mode-toogle';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import FilterCharacters from '@/app/ui/characters/FilterCharacters';

function Navbar({ link }: { link: string }) {
  return (
    <nav className='w-[80vw] mx-auto flex justify-end gap-5 py-2'>
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

      <ModeToggle />
    </nav>
  )
}

export default Navbar