import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomeScreen from '../pages/HomeScreen';

import Pokes from '../pages/Pokes/index';

const Routes: React.FC = () => (
    <Switch>
        <Route path = "/" exact component={HomeScreen} />
        <Route path = "/:name" component={Pokes} />
    </Switch>
);



export default Routes;
