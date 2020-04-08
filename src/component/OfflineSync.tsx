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
import {fetchPostsIfNeeded, invalidateSubreddit, selectSubreddit} from "../redux/actions";
import Posts from "./Posts";
import Picker from "./Picker";
interface Props {
    selectedSubreddit: string,
    posts: [],
    isFetching: boolean,
    lastUpdated: number,
    dispatch: any
}

class OfflineSync extends React.Component<Props> {

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    handleChange = (nextSubreddit: any) => {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(selectSubreddit(nextSubreddit));
        dispatch(fetchPostsIfNeeded(nextSubreddit))
        this.notify(selectedSubreddit)
    }

    handleRefreshClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    notify = (data: any) => {
        toast("Wow so easy !")
        alert('works' + data.toString());
        console.log(data)

        const rememberMe = localStorage.getItem('reduxPersist:demoReducer');
        alert(rememberMe)
        localStorage.setItem("works", "Zac")
    }
    value = 1

    public render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0

        return (
            <Grid container spacing={1}>
                <Grid item xs={6} spacing={1} className={"Grid-Main-Top"}>
                    Right
                </Grid>
                <Grid item xs={6} spacing={1} className={"Grid-Main-Top"}>
                    <Picker value={selectedSubreddit}
                            onChange={this.handleChange}
                            options={[ 'reactjs', 'frontend' ]} />
                    <p>
                        {lastUpdated &&
                        <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
            </span>
                        }
                        {!isFetching &&
                        <button onClick={this.handleRefreshClick}>
                            Refresh
                        </button>
                        }
                    </p>
                    {isEmpty
                        ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                        : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                            <Posts posts={posts} />
                        </div>
                    }
                </Grid>
            </Grid>


        );
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

export default connect(mapStateToProps)(OfflineSync)