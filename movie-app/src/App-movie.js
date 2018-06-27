import React,{Component} from 'react';
import NavComp from './nav/Nav';
//import SearchComp from './search/SearchComp';
//import MyList from './myList/MyList';
//import PopList from './popList/PopList';
//import PopSeriesList from './popSeriesList/PopSeriesList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <NavComp/>
        </Router>
      </div>
    )
  }
}

export default App;
