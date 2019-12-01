import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import MainPage from "./Pages/main-page";
import LaunchesPast from './Pages/launches-past-page'
import Ships from './Pages/ships-page'
import Users from './Pages/users-page'

export default class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/launches" component={LaunchesPast}/>
                        <Route path="/ships" component={Ships}/>
                        <Route path="/users" component={Users}/>
                    </Switch>
                </Router>
            </>
        );
    }
}
