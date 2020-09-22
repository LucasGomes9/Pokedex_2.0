import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomeScreen from '../pages/HomeScreen';
import PokeInfoBulbasaur from '../pages/Pokes/bulbasaur';
import PokeInfoVenusaur from '../pages/Pokes/venusaur';
import PokeInfoIvisaur from '../pages/Pokes/ivysaur';
import PokeInfoCharmander from '../pages/Pokes/charmander';
import PokeInfocharmeleon from '../pages/Pokes/charmeleon';
import PokeInfocharizard from '../pages/Pokes/charizard';
import PokeInfoSquirtle from '../pages/Pokes/squirtle';
import PokeInfoWartortle from '../pages/Pokes/wartortle';
import PokeInfoBlastoise from '../pages/Pokes/blastoise';

const Routes: React.FC = () => (
    <Switch>
        <Route path = "/" exact component={HomeScreen} />
        <Route path = "/pokedexBulbasaur" component={PokeInfoBulbasaur} />
        <Route path = "/pokedexVenusaur" component={PokeInfoVenusaur} />
        <Route path = "/pokedexIvysaur" component={PokeInfoIvisaur} />
        <Route path = "/pokedexCharmander" component={PokeInfoCharmander} />
        <Route path = "/pokedexCharmeleon" component={PokeInfocharmeleon} />
        <Route path = "/pokedexCharizard" component={PokeInfocharizard} />
        <Route path = "/pokedexSquirtle" component={PokeInfoSquirtle} />
        <Route path = "/pokedexWartortle" component={PokeInfoWartortle} />
        <Route path = "/pokedexBlastoise" component={PokeInfoBlastoise} />
    </Switch>
);



export default Routes;
