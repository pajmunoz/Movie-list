import React,{Component} from 'react';
import NavComp from './nav/Nav';
//import SearchComp from './search/SearchComp';
//import MyList from './myList/MyList';
//import PopList from './popList/PopList';
//import PopSeriesList from './popSeriesList/PopSeriesList';
import {BrowserRouter as Router} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      
        <Router>
          <NavComp/>
        </Router>
    
    )
  }
}

export default App;
