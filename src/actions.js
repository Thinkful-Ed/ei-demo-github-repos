export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const fetchReposRequest = () => ({
    type: FETCH_REPOS_REQUEST
});

export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const fetchReposSuccess = repos => ({
    type: FETCH_REPOS_SUCCESS,
    repos
});

export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
export const fetchReposError = error => ({
    type: FETCH_REPOS_ERROR,
    error
});

export const fetchRepos = username => dispatch => {
    dispatch(fetchReposRequest());
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject('Something went wrong');
            }
            return res.json();
        })
        .then(repos =>
            dispatch(fetchReposSuccess(repos.map(repo => repo.name)))
        )
        .catch(error => dispatch(fetchReposError(error)));
};
