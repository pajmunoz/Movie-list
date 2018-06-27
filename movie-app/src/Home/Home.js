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
          <PopList/>
          <PopSeriesList/>
        </div>
      </div>
    )
  }
}

export default Home;
