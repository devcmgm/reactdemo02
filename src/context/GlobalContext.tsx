import {Context, createContext} from 'react';

export interface GlobeContext {

    getTab: number;
    setTab: (number: number) => void;

    message?: string;

}

export interface OfflineContext {
    isOnline: boolean;
}

const globalContext: Context<GlobeContext> = createContext<GlobeContext>({

    getTab: 1,
    setTab: () => {},

});

export default globalContext;


