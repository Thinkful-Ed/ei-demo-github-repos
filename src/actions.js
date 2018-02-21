export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const fetchReposSuccess = repos => ({
    type: FETCH_REPOS_SUCCESS,
    repos
});

export const fetchRepos = username => dispatch => {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(repos =>
            dispatch(fetchReposSuccess(repos.map(repo => repo.name)))
        );
};
