import { ModeToggle } from '@/components/mode-toogle';
import { Button } from '@/components/ui/button';
import { AreaChart, Atom, Swords, UserSquare, Users, Star } from 'lucide-react';
import Link from 'next/link';
import { getRandomIdRecursively } from '../lib/data';

async function Navbar() {
  return (
    <nav 
      className='mx-auto flex justify-between gap-5 py-5 px-5'
    >
      <div className='flex items-center justify-center gap-2 md:gap-5'>
        <Link
          href="/"
        >
          <Atom
            width={40}
            height={40}
            className={`object-contain animate-spin1 text-primary`}
          />
        </Link>
        <Link
          href="/characters"
        >
          <Button className='hidden md:block' variant={'link'}>Characters</Button>
          <Button className='block md:hidden' variant={'link'}><UserSquare/></Button>
        </Link>
        <Link
          href="/teams"
        >
          <Button className='hidden md:block' variant={'link'}>Teams</Button>
          <Button className='block md:hidden' variant={'link'}><Users/></Button>
        </Link>
        <Link
          href={`/fightCharacter?first=${await getRandomIdRecursively()}&second=${await getRandomIdRecursively()}`}
        >
          <Button className='hidden md:block' variant={'link'}>Fight characters</Button>
          <Button className='block md:hidden' variant={'link'}><Swords/></Button>
        </Link>
        <Link
          href={`/rankings`}
        >
          <Button className='hidden md:block' variant={'link'}>Rankings</Button>
          <Button className='block md:hidden' variant={'link'}><AreaChart/></Button>
        </Link>
        <Link
            href={`/favorites`}
        >
            <Button className='hidden md:block' variant={'link'}>Favorites</Button>
            <Button className='block md:hidden' variant={'link'}><Star /></Button>
        </Link>
        {/* <Link
          href="/fightTeam"
        >
          <Button variant={'link'}>Fight Teams</Button>
        </Link> */}
      </div>

      <div className='flex justify-end gap-5'>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar