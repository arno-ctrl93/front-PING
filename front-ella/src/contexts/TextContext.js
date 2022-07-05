import React, { useContext, createContext } from 'react';

export const TextContext = createContext(null)

export function useTextContext () {
    return useContext(TextContext);
}