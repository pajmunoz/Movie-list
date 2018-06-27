import React,{Component} from 'react';
import NavComp from './../nav/Nav';
import SearchComp from './../search/SearchComp';
import MyList from './../myList/MyList';
import PopList from './../popList/PopList';
import PopSeriesList from './../popSeriesList/PopSeriesList';

class Peliculas extends Component{
  render(){
    return(
      <div>
        <div className="container">
          <SearchComp/>
          <PopList/>

        </div>
      </div>
    )
  }
}

export default Peliculas;
