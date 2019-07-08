import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import simpleReducers from './reducers';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import throttle from 'lodash/throttle';
import { loadState, saveState } from "./utils/localStorage";

import DeviceScreen from './screens/DeviceScreen';
import Launcher from './screens/Launcher';
import LoginScreen from './screens/LoginScreen';


const persistedState = loadState();
let store = createStore(simpleReducers, persistedState, applyMiddleware(thunk));
store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Launcher >
                            <Route exact path="/"
                                render={() => {
                                    if (store.getState().auth.token)
                                        return (<DeviceScreen />);
                                    else
                                        return (<LoginScreen />);
                                }} />
                            <Route path="/devices"
                                render={() => (store.getState().auth.token ? <DeviceScreen /> : <Redirect to="/" />)} />
                        </Launcher>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }

}
export default App;