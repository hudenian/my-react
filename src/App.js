import React, {Component} from 'react'
import {BrowserRouter,HashRouter, Route, Switch} from "react-router-dom"
import "./App.css";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default App