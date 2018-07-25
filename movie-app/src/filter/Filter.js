import React, {Component} from 'react';

class Filter extends Component{
  render(){
    return(
      <div className="row mb-2">
        <div className=" col-sm-6 col-md-3">
          <div className="input-group">
            <select className="custom-select" id="inputYear">
              <option>Año</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </div>
        <div className=" col-sm-6 col-md-3">
          <div className="input-group">
            <select className="custom-select" id="inputOrder">
              <option>Ordenar por</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </div>
        <div className=" col-sm-6 col-md-3">
          <div className="input-group">
            <select className="custom-select" id="inputGenre">
              <option>Género</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
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
    )
  }
}

export default Filter;
