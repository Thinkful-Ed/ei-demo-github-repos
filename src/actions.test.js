import {fetchRepos, fetchReposRequest, fetchReposSuccess} from './actions';

describe('fetchRepos', () => {
    it('Should dispatch fetchReposSuccess', () => {
        const repos = [{name: 'Foo'}, {name: 'Bar'}];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return repos;
                }
            })
        );

        const username = 'foobar';
        const dispatch = jest.fn();
        return fetchRepos(username)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(
                `https://api.github.com/users/${username}/repos`
            );
            expect(dispatch).toHaveBeenCalledWith(fetchReposRequest());
            expect(dispatch).toHaveBeenCalledWith(
                fetchReposSuccess(repos.map(repo => repo.name))
            );
        });
    });
});
