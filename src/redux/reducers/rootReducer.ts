import { combineReducers } from 'redux'
import {
    SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedSubreddit = (state = 'covid', action: { type: any; subreddit: [] }) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

interface PostParam {
    didInvalidate: boolean;
    isFetching: boolean;
    items: [],
}

const initialState: PostParam = {
    didInvalidate: false,
    isFetching: false,
    items: []
}

const posts = (state: PostParam = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action: { type: any; subreddit?: string | number; posts?: any; receivedAt?: any }) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsBySubreddit = (state: any, action: { type: any; subreddit: string }) => {
    state = initialState;
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default rootReducer
