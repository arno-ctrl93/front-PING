import React, { useContext, createContext } from 'react';

export const CompilationContext = createContext(null)

export function useCompilationContext () {
    return useContext(CompilationContext);
}