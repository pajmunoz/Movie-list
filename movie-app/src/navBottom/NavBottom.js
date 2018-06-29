import React,{Component} from 'react';

class NavBottom extends Component{
  render(){
    return(
      <nav>
        <ul className="pagination">
          <li className="page-item"><a className="page-link">Previous</a></li>
          <li className="page-item"><a className="page-link">1</a></li>
          <li className="page-item"><a className="page-link">2</a></li>
          <li className="page-item"><a className="page-link">3</a></li>
          <li className="page-item"><a className="page-link">Next</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBottom;
