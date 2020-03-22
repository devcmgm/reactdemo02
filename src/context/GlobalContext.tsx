import {Context, createContext} from 'react';

export interface GlobeContext {
    isPrimary: boolean;
    setPrimary: (arg0: boolean) => void;

    getTab: number;
    setTab: (arg0: number) => void;
}

export interface OfflineContext {
    isOnline: boolean;
}

const globalContext: Context<GlobeContext> = createContext<GlobeContext>({
    isPrimary: true,
    setPrimary: () => {},

    getTab: 1,
    setTab: () => {},

});

export default globalContext;


