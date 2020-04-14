import React, {Component, useState } from 'react';
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
import {Container} from "@material-ui/core";
import "./App.scss"
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, KeyboardTimePicker } from "@material-ui/pickers";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {connect} from "react-redux";
import {fetchPostsIfNeeded} from "./redux/actions";
import OfflineSync from "./component/OfflineSync";
interface Props {
    selectedSubreddit: string,
    posts: [],
    isFetching: boolean,
    lastUpdated: number,
    dispatch: any
}

export interface StoreData {
    data: string;
}

class App extends React.Component {

    notify = () => {
        toast("Wow so easy !")
        alert('works');
        const rememberMe = localStorage.getItem('reduxPersist:demoReducer');
        alert(rememberMe)
        localStorage.setItem("works", "Zac")
    }
    value = 1

    private handleDate(date: MaterialUiPickersDate) {
        this.setState({ date: date });
    }

    public render() {
        let classes = {
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        };


        return (
            <Grid container spacing={1}>
                <Grid item xs={12} spacing={1} className={"Grid-Main-Top"}>
                    Top Tool Bar
                    <hr/>
                    <Grid item xs={12} spacing={1} className={"Grid-Main-Body"}>
                        Discrepancy </Grid>
                    <Grid container>
                        <Grid item xs={6} spacing={1} className={"Grid-Serial"}>
                           Split
                        </Grid>
                        <Grid item xs={6} spacing={1} className={"Grid-Main-Body"}>
                           Two Split
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        );
    }

    private handleChange() {

    }
}

export default App