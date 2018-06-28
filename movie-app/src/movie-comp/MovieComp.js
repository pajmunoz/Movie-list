import React,{Component} from 'react';
import MyMovie from './../myMovie/MyMovie';
import NavBottom from '../navBottom/NavBottom';

class MovieComp extends Component{
  render(){
    return(
      <div>
      <div className="row mb-4">
        <div className=" col-sm-6 col-md-3">
          <div class="input-group">
            <select class="custom-select" id="inputGroupSelect04">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className=" col-sm-6 col-md-3">
          <div class="input-group">
            <select class="custom-select" id="inputGroupSelect04">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className=" col-sm-6 col-md-3">
          <div class="input-group">
            <select class="custom-select" id="inputGroupSelect04">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className=" col-sm-1 col-md-1"></div>
        <div className=" col-sm-1 col-md-1">
          <button type="button" class="btn btn-light"><i class="material-icons">view_list</i></button>
        </div>
        <div className=" col-sm-1 col-md-1">
          <button type="button" class="btn btn-light"><i class="material-icons">view_module</i></button>
        </div>
      </div>
      <div className="row">
        <MyMovie/>
        <MyMovie/>
        <MyMovie/>
        <MyMovie/>
        <MyMovie/>
        <MyMovie/>
      </div>
      <NavBottom/>
      </div>
    )
  }
}

export default MovieComp;
