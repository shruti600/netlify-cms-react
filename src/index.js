import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
import FirstHome from './pages/MainHome/FirstHome';
import Features from './pages/Features';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={FirstHome} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/allposts" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
        </div>
    </Router>, 
    document.getElementById('root')
);

