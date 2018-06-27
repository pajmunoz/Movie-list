import React, {Component} from 'react';
import MyMovie from './../myMovie/MyMovie'

class PopList extends Component {

  render(){
    return(
      <div>
        <h5>
          Películas más populares
          <small className="text-muted pl-2">
            <a href="">Ver Todas</a>
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
export default PopList;
