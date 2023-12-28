import { ModeToggle } from '@/components/mode-toogle';
import { Button } from '@/components/ui/button';
import { Atom } from 'lucide-react';
import Link from 'next/link';

function Navbar(/* { link }: { link: string } */) {
  return (
    <nav 
      // className='mx-auto flex justify-between gap-5 py-5 pt-16 px-5 max-w-[80rem]'
      className='mx-auto flex justify-between gap-5 py-5 px-5'
    >
      <div className='flex items-center justify-center gap-5'>
        {/* Radiation, Atom, ChevronsDown, Play*/}
        <Link
          href="/"
        >
          <Atom
            width={40}
            height={40}
            // className={`object-contain animate-spin1 text-primary`}
            className={`object-contain animate-spin1 text-primary`}
          />
        </Link>
        <Link
          href="/characters"
        >
          <Button variant={'link'}>Characters</Button>
        </Link>
        <Link
          href="/teams"
        >
          <Button variant={'link'}>Teams</Button>
        </Link>
      </div>

      <div className='flex justify-end gap-5'>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar