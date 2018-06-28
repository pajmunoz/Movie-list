import React, {Component} from 'react';
class SearchComp extends Component {
  render(){
    return(
      <div className="input-group input-group-lg mb-5 p-3 bg-light">
        <input type="text" className="form-control" placeholder="Búsqueda" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Buscar</button>
        </div>
      </div>
    )
  }
}
export default SearchComp;
