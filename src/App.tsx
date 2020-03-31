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
import {Container} from "@material-ui/core";
import "./App.scss"

class App extends React.Component {

    notify = () => {
        toast("Wow so easy !")
        alert('works');
        const rememberMe = localStorage.getItem('reduxPersist:demoReducer');
        alert(rememberMe)
        localStorage.setItem("works", "Zac")
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
            <Grid container spacing={1}>
                <Grid item xs={12} spacing={1} className={"Grid-Main-Top"}>
                    Top Tool Bar
                    <hr/>
                    <Grid item xs={12} spacing={1} className={"Grid-Main-Body"}>
                        Discrepancy </Grid>
                    <Grid container>
                        <Grid item xs={3} className={"Grid-Serial"}>
                            JCN<br/>
                        </Grid>
                        <Grid item xs={3} spacing={1} className={"Grid-Aircraft"}>
                            Aircraft<br/>
                        </Grid>

                        <Grid item xs={3} spacing={1} className={"Grid-Main-Body"}>
                            Part Number<br/>
                        </Grid>
                        <Grid item xs={3} spacing={1} className={"Grid-Aircraft"}>
                            Serial<br/>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} spacing={1} className={"Grid-Aircraft"}>
                        Serial<br/>
                    </Grid>
                    <Grid container>
                        <Grid container>
                            <Grid item xs={6} spacing={1} >
                               Specialist<br/>
                               <Grid container>
                                <Grid item xs={6} spacing={1} className={"Grid-Main-Body"}>
                                    Start Time<br/>
                                </Grid>
                                <Grid item xs={6} spacing={1} className={"Grid-Aircraft"}>
                                    End Time<br/>
                                </Grid>
                               </Grid>
                            </Grid>
                            <Grid item xs={6} spacing={1} className={"Grid-Main-Body"}>
                                Remarks<br/>
                            </Grid>
                        </Grid>

                        <Grid item xs={6} spacing={1} className={"Grid-Serial"}>
                            Job Status<br/>
                        </Grid>
                        <Grid item xs={6} spacing={1} className={"Grid-Main-Body"}>
                            Document<br/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        );
    }
}

export default App;