import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

import Landing from '../pages/Landing';
import Orphanage from '../pages/Orphanage';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import CreateOrphanageDone from '../pages/CreateOrphanageDone';


const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/signin" component={SignIn} />

    <Route path="/" exact component={Landing} />
    <Route path="/app" component={OrphanagesMap} />

    <Route path="/orphanages/create" exact component={CreateOrphanage} />
    <Route path="/orphanages/create/done" component={CreateOrphanageDone} />
    <Route path="/orphanages/:id" component={Orphanage} />
  </Switch>
);

export default AppRoutes;