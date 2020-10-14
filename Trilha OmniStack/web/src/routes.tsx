import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

// Switch => permite que somente uma rota seja chamada sozinha, ou seja não redenriza mais de uma pagina. 

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" exact component={OrphanagesMap} />

                <Route path="/orphanages/create" exact component={CreateOrphanage} />
                <Route path="/orphanages/:id" exact component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;