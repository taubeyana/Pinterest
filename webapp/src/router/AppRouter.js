import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import PinsFeed from '../components/pins-feed/PinsFeed';
import PinPage from '../components/pins-feed/components/pin/components/pin-page/PinPage'
import UnderConstruction from '../common/under-construction/UnderConstruction';
import NotFoundPage from '../common/not-found-page/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter> 
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path = '/' component = { PinsFeed }/>
                <Route path = '/explore' component = { UnderConstruction }/>
                <Route path = '/following' component = { UnderConstruction }/>
                <Route path = '/pins/:id' component = { PinPage }/>
                <Route component = { NotFoundPage } />
            </Switch>
        </Fragment>
    </BrowserRouter>
)
                
export default AppRouter
                