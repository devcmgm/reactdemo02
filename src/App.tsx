import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalProvider from "./context/GlobalProvider";
import theme from "./theme";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AnyAction, Action} from 'redux';

class App extends React.Component {

    notify = () => {
        toast("Wow so easy !")
        alert('works');
        const rememberMe = localStorage.getItem('reduxPersist:demoReducer');
        alert(rememberMe)
        localStorage.setItem("works","Zac")
    }
    value = 1

    public render() {
        let classes = {
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        };
        return (
            <div className='App-wrapper'>
                <GlobalProvider>
                    Works
                    <button onClick={this.notify}></button>
                    <ToastContainer/>
                </GlobalProvider>

            </div>
        );
    }
}

export default App;