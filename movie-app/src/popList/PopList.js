import React, {Component} from 'react';
import MyMovie from './../myMovie/MyMovie';
import MyApi from './../api/api';

const api_key='061148c37bc0940366ad8ed0e070a619';

class PopList extends Component {
  constructor(props){
    super(props);
    this.state ={
      loading:true,
      items:[],
      error:null
    };
    this.api = new MyApi()
  }
  componentDidMount(){
      this.setState({loading:true, error:null});
      this.api.getSomeData().then(res =>{
        this.setState({
          loading:false,
          error:null,
          items:res.data.results
        });
      }).catch((error)=>{
        this.setState({loading:false, error:error, items:[]});
      })

  }
  render(){

    const {loading, error, items} = this.state;
      console.log(items)
    return(
      <div>
        {loading && <div>Loading...</div>}
        {!!error && <div>{error}</div>}
        {!!items.length &&
          <div>
            <h5>
              Películas más populares
              <small className="text-muted pl-2">
                <a href="">Ver Todas</a>
              </small>
            </h5>
            <div className="row">
              {items.map(item => (
                <div className="col-12 col-sm-4 col-md-2 text-center mb-4" key={item.original_title}>
                  <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt="..." className="img-thumbnail"/>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    )
  }
}
export default PopList;
