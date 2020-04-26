import {ComponentClass, Context, createContext} from 'react';

export interface ModeContext {
    component: ComponentClass | null;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    props: Record<string, any>;
    showModal: <T>(component: ComponentClass<T>, props?: T) => void;
    hideModal: () => void;
}

const ModalContext: Context<ModeContext> = createContext<ModeContext>({
    component: null,
    props: {},
    showModal: <T>(component: ComponentClass<T>, props?: T) => {},
    hideModal: () => {},
});

export default ModalContext;