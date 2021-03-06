import React,{Component} from 'react';
//import NavComp from './../nav/Nav';
import SearchComp from './../search/SearchComp';
import MyList from './../myList/MyList';
import PopList from './../popList/PopList';
import PopSeriesList from './../popSeriesList/PopSeriesList';
//import Api from './../api/api';
import {NavLink} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div>
        <div className="container">
          <SearchComp/>
          <MyList/>
          <h5>
            Películas más populares
            <small className="text-muted pl-2">
              <NavLink to ="/Peliculas">Ver Todas</NavLink>
            </small>
          </h5>
          <PopList cantidad="6" list="/movie/popular"/>
          <h5>
            Series más populares
            <small className="text-muted pl-2">
              <NavLink to ="/Series">Ver Todas</NavLink>
            </small>
          </h5>
          <PopSeriesList cantidad="6"/>
        </div>
      </div>
    )
  }
}

export default Home;
