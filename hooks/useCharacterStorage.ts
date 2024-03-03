"use client";

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { STORAGE_KEY } from '../utilities/constants';

export default function useCharacterStorage(): [Character[], Dispatch<SetStateAction<Character[]>>] {
  const fromLocal = (): Character[] => {
    // if (typeof window === 'undefined') {
    //   // return new Array();
    //   return fromLocal()
    // } else {
    //   // try {
    //   const item = window.localStorage.getItem(STORAGE_KEY);
    //   return item ? JSON.parse(item) as Character[] : new Array() as Character[];
    //   // } catch (error) {
    //   //   console.error(error);
    //   //   return new Array();
    //   // }
    // }
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(STORAGE_KEY);
      return item ? JSON.parse(item) as Character[] : new Array() as Character[];
    }
    return new Array() as Character[]
  };

  const [storedValue, setStoredValue] = useState(/* initialValue */fromLocal);
  // We will use this flag to trigger the reading from localStorage
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  // Use an effect hook in order to prevent SSR inconsistencies and errors.
  // This will update the state with the value from the local storage after
  // the first initial value is applied.
  useEffect(() => {
    // const fromLocal = (): Character[] => {
    //   if (typeof window === 'undefined') {
    //     return new Array();
    //   }
    //   try {
    //     const item = window.localStorage.getItem(STORAGE_KEY);
    //     return item ? JSON.parse(item) as Character[] : new Array() as Character[];
    //   } catch (error) {
    //     console.error(error);
    //     return new Array();
    //   }
    // };
    // Set the value from localStorage
    setStoredValue(fromLocal);
    // First load is done
    setFirstLoadDone(true);
  }, []);

  // Instead of replacing the setState function, react to changes.
  // Whenever the state value changes, save it in the local storage.
  useEffect(() => {
    // If it's the first load, don't store the value.
    // Otherwise, the initial value will overwrite the local storage.
    if (!firstLoadDone) {
      return;
    }

    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, firstLoadDone]);

  // Return the original useState functions
  return [storedValue, setStoredValue];
}