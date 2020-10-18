import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import Orphanage from '../pages/Orphanage';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" component={OrphanagesMap} />

      <Route path="/orphanages/create" component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={Orphanage} />
    </Switch>
  )
}

export default Routes;