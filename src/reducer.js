import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_ERROR
} from './actions';

const initialState = {
    repos: ['foo', 'bar', 'baz'],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    if (action.type === FETCH_REPOS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_REPOS_SUCCESS) {
        return Object.assign({}, state, {
            repos: action.repos,
            loading: false
        });
    } else if (action.type === FETCH_REPOS_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
};
