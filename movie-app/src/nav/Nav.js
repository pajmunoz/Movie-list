import React, {Component} from 'react';

import Home from './../Home/Home';
import Peliculas from './../peliculas/Peliculas';
import Series from './../series/Series';
import MiLista from './../miLista/MiLista'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class NavComp extends Component {
  render(){
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/Peliculas" className="nav-link">Peliculas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Series" className="nav-link">Series</Link>
                </li>
                <li className="nav-item">
                  <Link to ="Mi-lista" className="nav-link disabled">Mi Lista</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Peliculas" component={Peliculas} />
          <Route path="/Series" component={Series} />
          <Route path="/Mi-lista" component={MiLista} />
        </div>
      </Router>
    )
  }
}
export default NavComp;
