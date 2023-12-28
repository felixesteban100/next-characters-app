"use client";

import { useState, useEffect, useRef } from 'react';
import { CharacterInfo } from '../lib/definitions';

type ReturnType = [CharacterInfo[], (characters: CharacterInfo[]) => void];

function useCharacterStorage(key: string): ReturnType {
  const initialRender = useRef(true);

  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

  useEffect(() => {
    const charactersFromLocal = localStorage.getItem(key)

    if (charactersFromLocal != null) {
      const storedcharacters = JSON.parse(charactersFromLocal);
      setCharacters([...characters, ...storedcharacters]);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem(key, JSON.stringify(characters));
  }, [characters]);

  return [characters, setCharacters];
}

export default useCharacterStorage;