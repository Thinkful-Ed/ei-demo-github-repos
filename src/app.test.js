import React from 'react';
import {mount} from 'enzyme';
import {App} from './app';

jest.mock('./actions', () =>
    Object.assign({}, require.requireActual('./actions'), {
        fetchRepos: jest.fn().mockImplementation(username => {
            return {
                type: 'FETCH_REPOS',
                username
            };
        })
    })
);

describe('<App />', () => {
    it('dispatches the fetchRepos action', () => {
        const username = 'foobar';
        const dispatch = jest.fn();
        const wrapper = mount(<App dispatch={dispatch} repos={[]} />);
        const input = wrapper.find('input');
        input.instance().value = username;
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith({
            type: 'FETCH_REPOS',
            username
        });
    });
});
