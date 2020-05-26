import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './screens/home';


export default () => (
    <Route
        render={() => (
            <Switch>
                <Route path="/" component={HomePage} exact />
            </Switch>
        )} />
);
