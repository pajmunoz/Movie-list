import React,{Component} from 'react';
import NavComp from './../nav/Nav';
import SearchComp from './../search/SearchComp';
import MyList from './../myList/MyList';
import PopList from './../popList/PopList';
import PopSeriesList from './../popSeriesList/PopSeriesList';
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
              <a href="">Ver Todas</a>
            </small>
          </h5>
          <PopList/>
          <h5>
            Series más populares
            <small className="text-muted pl-2">
              <a href="">Ver Todas</a>
            </small>
          </h5>
          <PopSeriesList/>
        </div>
      </div>
    )
  }
}

export default Home;
