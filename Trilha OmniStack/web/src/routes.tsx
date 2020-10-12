import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

// Switch => permite que somente uma rota seja chamada sozinha, ou seja não redenriza mais de uma pagina. 

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" exact component={OrphanagesMap} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;