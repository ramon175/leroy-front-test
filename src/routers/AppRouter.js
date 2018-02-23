import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
        <div className="main">
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route component={NotFound} />
            </Switch>
        </div>
    <Footer />
    </div>
    </BrowserRouter>
)

export default AppRouter;