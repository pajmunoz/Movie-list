import React, {Component} from 'react';
class MyMovie extends Component {
  render(){
    return(
        <div className="row">
          {this.props.movieList}{this.props.seriesList}
        </div>
    )
  }
}
export default MyMovie;
