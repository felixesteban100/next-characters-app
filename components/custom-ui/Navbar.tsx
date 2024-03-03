import { ModeToggle } from '@/components/mode-toogle';
import { AreaChart, Atom, Swords, UserSquare, Users, Star } from 'lucide-react';
import { getRandomIdRecursively } from '@/utilities/data';
import LinkNavBar from './LinkNavBar';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { unstable_noStore as noStore } from 'next/cache'; 



async function Navbar() {
  noStore()

  const first = await getRandomIdRecursively()
  const second = await getRandomIdRecursively()

  const randomPage = Math.floor(Math.random() * 65)

  return (
    <nav
      className='mx-auto flex justify-between gap-5 py-5 w-full'
    >
      <div className='hidden md:flex items-center justify-center gap-2 md:gap-5'>
        <LinkNavBar
          href="/"
        />
        <LinkNavBar
          href={`/characters?pageCharacters=${randomPage}&pagination=${false}`}
          Icon={<UserSquare />}
          // Icon={UserSquare}
          label={'Characters'}
        />
        <LinkNavBar
          href="/teams"
          Icon={<Users />}
          // Icon={Users}
          // Icon={Users}
          label={'Teams'}
        />
        <LinkNavBar
          href={`/fightCharacter?first=${first}&second=${second}`}
          // href={`/fightCharacter`}
          Icon={<Swords />}
          // Icon={Swords}
          // Icon={Swords}
          label={'Fight'}
        />
        <LinkNavBar
          href={`/rankings`}
          Icon={<AreaChart />}
          // Icon={AreaChart}
          // Icon={AreaChart}
          label={'Rankings'}
        >
        </LinkNavBar>
        <LinkNavBar
          href={`/favorites`}
          Icon={<Star />}
          // Icon={Star}
          // Icon={Star}
          label={'Favorites'}
        />
        {/* <Link
          href="/fightTeam"
        >
          <Button variant={'link'}>Fight Teams</Button>
        </Link> */}
      </div>

      <div className='flex md:hidden items-center justify-center gap-2 md:gap-5'>
        <Sheet>
          <SheetTrigger>
            <Atom
              width={40}
              height={40}
              className={`object-contain animate-spin1 text-primary`}
            />
          </SheetTrigger>
          <SheetContent side={'left'} className='w-[55%] block md:hidden'>
            {/* <SheetHeader>
              <SheetTitle>Pages</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader> */}

            <div className='mt-24 flex flex-col items-start justify-center gap-12 md:gap-5'>
              <SheetClose asChild>
                <LinkNavBar
                  href="/"
                  mobile={true}
                />
              </SheetClose>
              <SheetClose>
                <LinkNavBar
                  href={`/characters?pageCharacters=${Math.floor(Math.random() * 65)}`}
                  Icon={<UserSquare width={40}
                    height={40} />}
                  label={'Characters'}
                  mobile={true}
                />
              </SheetClose>

              <SheetClose>
                <LinkNavBar
                  href="/teams"
                  Icon={<Users width={40} height={40} />}
                  label={'Teams'}
                  mobile={true}
                />
              </SheetClose>

              <SheetClose>
                <LinkNavBar
                  href={`/fightCharacter?first=${await getRandomIdRecursively()}&second=${await getRandomIdRecursively()}`}
                  Icon={<Swords width={40} height={40} />}
                  label={'Fight'}
                  mobile={true}
                />
              </SheetClose>

              <SheetClose>
                <LinkNavBar
                  href={`/rankings`}
                  Icon={<AreaChart width={40} height={40} />}
                  label={'Rankings'}
                  mobile={true}
                />
              </SheetClose>


              <SheetClose>
                <LinkNavBar
                  href={`/favorites`}
                  Icon={<Star width={40} height={40} />}
                  label={'Favorites'}
                  mobile={true}
                />
              </SheetClose>
              {/* <Link
          href="/fightTeam"
        >
          <Button variant={'link'}>Fight Teams</Button>
        </Link> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className='flex justify-end gap-5'>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar