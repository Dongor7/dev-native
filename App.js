import React from 'react';
import MainContainer from './MainContainer'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {MODES} from './constants';

const initialState = {
    isLoading: true,
    user_token: '',
    mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <MainContainer/>
            </Provider>
        );
    }
}

