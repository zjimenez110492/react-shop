import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './components/results/index'
import Details from './components/details/index'
const Root=(
    <BrowserRouter>
        <Switch>
            <Route path="/results" component ={Results}/>
            <Route path="/details" component ={Details}/>
            <Redirect from="/" to="/results"/>
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(Root, document.getElementById('root'));