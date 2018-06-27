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
            <a className="navbar-brand" href="">MovieApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                <Link to="/Peliculas" className="nav-item nav-link" href="">Películas</Link>
                <Link to="/Series" className="nav-item nav-link" href="">Series</Link>
                <Link to="/Mi-lista" className="nav-item nav-link" href="">Mi Lista</Link>
              </div>
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
