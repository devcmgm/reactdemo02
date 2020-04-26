import {Context, createContext} from 'react';

export interface GlobeContext {
    isPrimary: boolean;
    setPrimary: (boolean: boolean) => void;

    getTab: number;
    setTab: (number: number) => void;

    message?: string;

    logContent?: string;
    logName?: string;

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


