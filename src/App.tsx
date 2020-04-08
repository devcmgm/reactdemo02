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

class App extends React.Component<Props> {

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

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
                <OfflineSync />
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
                        <Grid item xs={3} spacing={1} >
                            Serial<br/>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} spacing={1} >
                        Serial<br/>
                    </Grid>
                    <Grid container>
                        <Grid container>
                            <Grid item xs={6} spacing={1} >
                               Specialist<br/>
                               <Grid container>
                                <Grid item xs={6} spacing={1} className={"Grid-Main-Body"}>
                                    Start Time<br/>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <TimePicker
                                            variant="inline"
                                            label="Inline mode"
                                            value={{}}
                                            onChange={this.handleDate}
                                        />
                                    </MuiPickersUtilsProvider>
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
                            <RadioGroup row={true} aria-label="gender" name="gender1"  onChange={this.handleChange}>
                                <FormControlLabel value="NotStarted" control={<Radio />} label="Not Started" />
                                <FormControlLabel value="Started" control={<Radio />} label="Started" />
                                <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
                                <FormControlLabel value="Pause" control={<Radio />} label="Paused" />
                            </RadioGroup>

                        </Grid>
                        <Grid item xs={6} spacing={1} className={"Grid-Main-Body"}>
                            Document<br/>
                            <FormGroup row={true} aria-label="gender"   onChange={this.handleChange}>
                                <FormControlLabel value="NotStarted" control={<Checkbox />} label="Not Started" />
                                <FormControlLabel value="Started" control={<Checkbox />} label="Started" />
                                <FormControlLabel value="Completed" control={<Checkbox />} label="Completed" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        );
    }

    private handleChange() {

    }
}

const mapStateToProps = (state: { selectedSubreddit: any; postsBySubreddit: any; }) => {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)