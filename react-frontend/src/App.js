import React from 'react';
import './App.css';
import ClientListComponent from './components/ClientListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateClientComponent from './components/CreateClientComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className ='container'>
                    <Switch>
                        <Route path='/' exact component={ClientListComponent}></Route>
                        <Route path='/clients' component={ClientListComponent}></Route>
                        <Route path='/add-client'component={CreateClientComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;