import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import CarDetails from "./component/CarDetails/CarDetails";
import Cars from "./component/Cars/Cars";
import history from "./component/history";
import Home from "./component/home/Home";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cars" exact component={Cars} />
                    <Route path="/carDetails" exact component={CarDetails} />
                </Switch>
            </Router>
        )
    }
}