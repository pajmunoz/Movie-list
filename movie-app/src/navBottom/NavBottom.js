import React,{Component} from 'react';

class NavBottom extends Component{
  render(){
    return(
      <nav>
        <ul class="pagination">
          <li class="page-item"><a class="page-link">Previous</a></li>
          <li class="page-item"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">3</a></li>
          <li class="page-item"><a class="page-link">Next</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBottom;
