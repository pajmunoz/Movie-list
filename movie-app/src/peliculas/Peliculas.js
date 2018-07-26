import React,{Component} from 'react';
import SearchComp from './../search/SearchComp';
import PopList from '../popList/PopList';
import NavBottom from '../navBottom/NavBottom';
import Filter from '../filter/Filter';

class Peliculas extends Component{
  render(){
    return(
        <div className="container">
          <SearchComp/>
          <h5>Peliculas</h5>
          <Filter/> 
           <PopList/>
          <NavBottom/>
        </div>
    )
  }
}

export default Peliculas;
