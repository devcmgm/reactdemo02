import {Context, createContext} from 'react';
import {SnackbarProps} from "@material-ui/core";
import {SnackVariant} from "./SnackProvider";

export interface SnackyContext extends SnackbarProps {
    isOpen: boolean;
    variant: SnackVariant;
    showSnack: (variant: SnackVariant, snackMessage: string) => void;
    closeSnack: () => void;
    snackMessage: string;
}

const SnackContext: Context<SnackyContext> = createContext<SnackyContext>({
    isOpen: false,
    variant: {type: "success"},
    showSnack: () => {},
    closeSnack: () => {},
    snackMessage: '',
});

export default SnackContext;