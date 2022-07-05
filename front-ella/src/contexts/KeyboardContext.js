import React, { useContext, createContext } from 'react';

export const KeyboardContext = createContext(null)

export function useKeyboardContext () {
    return useContext(KeyboardContext);
}