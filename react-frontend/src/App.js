import React from 'react';
import './App.css';
import ClientListComponent from './components/ClientListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
    return (
        <div>
            <HeaderComponent/>
            <div className ='container'>
                <ClientListComponent/>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;