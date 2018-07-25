import React, {Component} from 'react';

import Home from './../Home/Home';
import Peliculas from './../peliculas/Peliculas';
import Series from './../series/Series';
import MiLista from './../miLista/MiLista'
import NotFound from '../NotFound';

import {Switch, Route,  NavLink} from 'react-router-dom';

/*const menus=[
  {enlace:"", name:"Home"},
  {enlace:"peliculas", name:"Peliculas"},
  {enlace:"series", name:"Series"},
  {enlace:"mi-lista", name:"Mi lista"}
];*/

class NavComp extends Component {
  render(){
    //console.log(menus)
    return(

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand">MovieApp</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName='active'>Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Peliculas" className="nav-link" activeClassName='active'>Peliculas</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Series" className="nav-link" activeClassName='active'>Series</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to ="Mi-lista" className="nav-link" activeClassName='active'>Mi Lista</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/peliculas" component={Peliculas} />
            <Route path="/series" component={Series} />
            <Route path="/mi-lista" component={MiLista} />
            <Route component={NotFound}/>
          </Switch>

        </div>

    )
  }
}
export default NavComp;
