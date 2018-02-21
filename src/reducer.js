import {FETCH_REPOS_SUCCESS} from './actions';

const initialState = {
    repos: ['foo', 'bar', 'baz']
};

export default (state = initialState, action) => {
    if (action.type === FETCH_REPOS_SUCCESS) {
        return Object.assign({}, state, {
            repos: action.repos
        });
    }
    return state;
};
