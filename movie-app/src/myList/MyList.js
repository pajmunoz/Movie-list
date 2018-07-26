import React, {Component} from 'react';
import MyMovie from './../myMovie/MyMovie'
import {NavLink} from 'react-router-dom';

class MyList extends Component {

  render(){
    return(
      <div>
        <h5>
          Mi Lista
          <small className="text-muted pl-2">
            <NavLink to ="/Mi-lista">Ver Todas</NavLink>
          </small>
        </h5>
        <div className="row">
          <MyMovie/>
          <MyMovie/>
          <MyMovie/>
          <MyMovie/>
          <MyMovie/>
          <MyMovie/>
        </div>
      </div>
    )
  }
}
export default MyList;
