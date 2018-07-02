import React,{Component} from 'react';
import SearchComp from './../search/SearchComp';
import MovieComp from '../movie-comp/MovieComp';

class Peliculas extends Component{
  render(){
    return(
        <div className="container">
          <SearchComp/>
          <h5>Peliculas</h5>
          <MovieComp/>
        </div>
    )
  }
}

export default Peliculas;
