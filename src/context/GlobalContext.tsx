import {Context, createContext} from 'react';

export interface GlobeContext {
    data: string
}

export interface OfflineContext {
    isOnline: boolean;
}

const globalContext: Context<GlobeContext> = createContext<GlobeContext>({
  data: 'global data'
});

export default globalContext;


