import React, {Component} from 'react';
import MyMovie from './../myMovie/MyMovie';
import MyApi from './../api/api';
import Loader from './../loader'

//const api_key='061148c37bc0940366ad8ed0e070a619';

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
      this.api.getPopMovies().then(res =>{
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
    let cantidad = this.props.cantidad
    const {loading, error, items} = this.state;
      //console.log(items)
    return(
      <div>
        {loading && <div><Loader/></div>}
        {!!error && <div>{error}</div>}
        {!!items.length &&
          <div>
            <MyMovie movieList={items.slice(0,cantidad).map(item => (
              <div className="col-12 col-sm-4 col-md-2 text-center mb-4" key={item.id}>
                <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt="..." className=" img-thumbnail"/>
                <div className="card-body overflow">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text boxi">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a className="btn btn-danger">Ver más</a>
                </div>
              </div>
            ))}></MyMovie>
          </div>
        }
      </div>
    )
  }
}
export default PopList;
