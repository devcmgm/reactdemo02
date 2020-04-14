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
import GlobalProvider from "../context/GlobalProvider";
import theme from "../theme";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AnyAction, Action} from 'redux';
import {Container} from "@material-ui/core";
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
import { fetchPostsIfNeeded, invalidateSubreddit, selectSubreddit} from "../redux/actions";
import Posts from "./Posts";
import Picker from "./Picker";
import {parseJSON} from "date-fns";
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
class OfflineSync extends React.Component {

    componentDidMount() {

    }

    notify = (data: any) => {
        toast("Wow so easy !")
        alert('Fetch What Now: works' + data.toString());
        console.log(data)
        localStorage.setItem("priorSelectedState", data)
        const rememberMe = localStorage.getItem('reduxPersist:demoReducer');
        // @ts-ignore
        const offlineJson = localStorage.getItem("reduxPersist:offline").toString()
        const data1 = JSON.parse(offlineJson)
        // @ts-ignore
        if (data1.online)
           alert("Online" + data1.online)
        else
            alert("Offline YES Works(" + data1.online + ")")
    }
    value = 1

    public render() {
        return (
            <div>

                <button onClick={this.notify}>
                            Refresh
                </button>
            </div>
        );
    }

}

const mapStateToProps = (state: any) => {
    const { offline } = state

    return {
        offline
    }
}

export default connect(mapStateToProps)(OfflineSync)