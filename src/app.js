import React from 'react';
import {connect} from 'react-redux';
import {fetchRepos} from './actions';

export class App extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log(this.input.value);
        this.props.dispatch(fetchRepos(this.input.value));
    }

    render() {
        const repos = this.props.repos.map((repo, index) => (
            <li key={index}>{repo}</li>
        ));

        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="input">Username</label>
                    <input
                        type="text"
                        id="input"
                        ref={input => (this.input = input)}
                    />
                    <button>Fetch</button>
                </form>
                <ul>{repos}</ul>
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => ({
    repos: state.repos
});

export default connect(mapStateToProps)(App);
