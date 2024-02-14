import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({match}) => (
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/clients-list`}/>
            <Route path={`${match.url}/clients-list`} component={lazy(() => import(`./clients-list`))}/>
            <Route path={`${match.url}/profile_edit/:id`} component={lazy(() => import(`./edit-profile`))}/>
            <Route path={`${match.url}/planner`} component={lazy(() => import(`./planner`))}/>
        </Switch>
    </Suspense>
);

export default Pages;