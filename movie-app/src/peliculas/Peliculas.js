import React,{Component} from 'react';
import SearchComp from './../search/SearchComp';
import MovieComp from '../movie-comp/MovieComp';

class Peliculas extends Component{
  render(){
    return(
        <div className="container">
          <SearchComp/>
          <MovieComp/>


        </div>
    )
  }
}

export default Peliculas;
