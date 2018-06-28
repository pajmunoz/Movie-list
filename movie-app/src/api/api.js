import axios from 'axios';

const API_KEY = "061148c37bc0940366ad8ed0e070a619";

class MyApi{
  constructor(){
    this.axios = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params:{
        api_key:API_KEY,
        languaje:'es-AR',
        headers:{"Access-Control-Allow-Origin":"*"},
      },
    })
  }
  getSomeData = (page = 1)=>(
    this.axios.get('/movie/popular',{
      params:{page:page}
    })
  );
}

export default MyApi
