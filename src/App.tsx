import React from 'react';
import AppManager from "./AppManager";
import GlobalProvider from "./context/GlobalProvider";
import SnackProvider from "./context/SnackProvider";
import ModalProvider from "./context/ModalProvider";

import './App.scss';

const App = () => {
    return (
        <div className='App-wrapper'>
            <GlobalProvider>
                <SnackProvider>
                    <ModalProvider>
                        <AppManager />
                    </ModalProvider>
                </SnackProvider>
            </GlobalProvider>
        </div>
    );
};

export default App