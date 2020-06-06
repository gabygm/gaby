import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './screens/home';
import ArticleDetail from './screens/article_detail'

export default () => (
    <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/article/:id" child={(props) => (<ArticleDetail id={props.match.params.id} />)} />
    </Switch>
);
