import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home.jsx';
import Project from './Project';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';

import { Switch, Route , Redirect } from 'react-router-dom';

const App = () => {
    return( 
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>        
        </>
    );   
};

export default App;