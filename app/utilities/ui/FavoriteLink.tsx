// 'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
// import useCharacterStorage from '../hooks/useCharacterStorage';

export default function FavoriteLink() {
    // const [charactersFavorite] = useCharacterStorage('next-characters-app')
    // console.log(charactersFavorite.map(c => c.name))

    return (
        <Link
            // href={`/favorites?charactersIds=${charactersFavorite.map(c => c.id)}`}
            href={`/favorites`}
        >
            <Button className='hidden md:block' variant={'link'}>Favorites</Button>
            <Button className='block md:hidden' variant={'link'}><Star /></Button>
        </Link>
    )
}