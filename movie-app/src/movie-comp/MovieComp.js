import React,{Component} from 'react';
import MyMovie from './../myMovie/MyMovie';
import NavBottom from '../navBottom/NavBottom';

class MovieComp extends Component{
  render(){
    return(
      <div>
        <div className="row mb-2">
          <div className=" col-sm-6 col-md-3">
            <div className="input-group">
              <select className="custom-select" id="inputYear">
                <option selected>Año</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className=" col-sm-6 col-md-3">
            <div className="input-group">
              <select className="custom-select" id="inputOrder">
                <option selected>Ordenar por</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className=" col-sm-6 col-md-3">
            <div className="input-group">
              <select className="custom-select" id="inputGenre">
                <option selected>Género</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className=" col-sm-1 col-md-1"></div>
          <div className=" col-sm-1 col-md-1">
            <button type="button" className="btn btn-light btn-sm"><i className="material-icons p-1">view_list</i></button>
          </div>
          <div className=" col-sm-1 col-md-1">
            <button type="button" className="btn btn-light btn-sm"><i className="material-icons p-1">view_module</i></button>
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
