import React from 'react';
import './App.css';
import ClientListComponent from './components/ClientListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewClientComponent from './components/ViewClientComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateOrUpdateClientComponent from './components/CreateOrUpdateClientComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className ='container'>
                    <Switch>
                        <Route path='/' exact component={ClientListComponent}></Route>
                        <Route path='/clients' component={ClientListComponent}></Route>
                        <Route path={["/add-client", "/update-client/:id"]} component={CreateOrUpdateClientComponent}></Route>
                        <Route path='/view-client/:id' component={ViewClientComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;