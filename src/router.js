import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './screens/home';
import ArticleDetail from './screens/article_detail'
import Contact from './components/contact/Contact'

export default () => (
    <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/article/:id" component={ArticleDetail} />
    </Switch>
);
