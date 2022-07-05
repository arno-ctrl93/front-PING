import React, { useContext, createContext } from 'react';

export const StartContext = createContext(null)

export function useStartContext () {
    return useContext(StartContext);
}