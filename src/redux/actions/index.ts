export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = (subreddit: any) => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = (subreddit: any) => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = (subreddit: any) => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit: any, json: any) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map((child: { data: any }) => child.data),
  receivedAt: Date.now()
})

const fetchPosts = (subreddit: any) => (dispatch: (arg0: { type: string; subreddit: any; posts?: any; receivedAt?: number }) => void) => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state: { postsBySubreddit: { [x: string]: any } }, subreddit: any) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = (subreddit: any) => (dispatch: (arg0: (dispatch: (arg0: { type: string; subreddit: any; posts?: any; receivedAt?: number | undefined }) => void) => Promise<void>) => any, getState: () => { postsBySubreddit: { [x: string]: any } }) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}
