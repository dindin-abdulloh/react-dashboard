import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Route>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/customers' component={Customers}/>
            </Switch>
       </Route>
    )
}

export default Routes
