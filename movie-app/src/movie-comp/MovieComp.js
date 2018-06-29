import React,{Component} from 'react';
import MyMovie from './../myMovie/MyMovie';
import NavBottom from '../navBottom/NavBottom';
import Filter from '../filter/Filter';
import PopList from '../popList/PopList';

class MovieComp extends Component{
  render(){
    return(
      <div>
        <Filter/>

        <div className="row">
          <PopList/>
        </div>
        <NavBottom/>
      </div>
    )
  }
}

export default MovieComp;
