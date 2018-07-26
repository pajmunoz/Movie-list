import React,{Component} from 'react';
import SearchComp from './../search/SearchComp';
import PopSeriesList from './../popSeriesList/PopSeriesList';
import NavBottom from '../navBottom/NavBottom';
import Filter from '../filter/Filter';

class Series extends Component{
  render(){
    return(
        <div className="container">
          <SearchComp/>
          <h5>Series</h5>
          <Filter/>          
          <PopSeriesList/>
          <NavBottom/>
        </div>
    )
  }
}

export default Series;
