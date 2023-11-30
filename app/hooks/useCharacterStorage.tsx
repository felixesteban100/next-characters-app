"use client"
import { useState, useEffect } from 'react';
import { CharacterInfo } from '../lib/definitions';

type ReturnType = [CharacterInfo[], (characters: CharacterInfo[]) => void];

function useCharacterStorage(key: string): ReturnType {
  const [characters, setCharacters] = useState<CharacterInfo[]>([
    // { name: `batman`, link: `/characters/70?name=Batman`, id: '70'},
    // { name: `spider-man`, link: `/characters/620?name=Spider-Man`, id: '620' }
  ]);

  useEffect(() => {
    // Retrieve characters from localStorage when the component mounts
    const storedCharacters = localStorage.getItem(key);
    if (storedCharacters) {
      setCharacters(JSON.parse(storedCharacters) as CharacterInfo[]);
    }
  }, [key]);

  const saveCharacters = (newCharacters: CharacterInfo[]) => {
    setCharacters(newCharacters);
  };

  useEffect(() => {
    // Update localStorage whenever characters change
    localStorage.setItem(key, JSON.stringify(characters));
  }, [key, characters]);

  return [characters, saveCharacters];
}

export default useCharacterStorage;