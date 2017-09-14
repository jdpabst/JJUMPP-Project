
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Graphs from './components/graphs/graphs.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Graphs } path='/graphs' exact />

    </Switch>
)
