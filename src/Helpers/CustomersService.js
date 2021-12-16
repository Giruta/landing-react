import axios from 'axios';

export default class CustomersService{

  constructor(){
    this.protocol = window.location.protocol;
    this.host = window.location.host;
    this.url = this.protocol + '//' + this.host + '/';
  }

  createCustomer(customer){
    return axios.post(`${this.url}api/register/`,customer);
  }

  getContent(language){
    return axios.get(`${this.url}api/translate/`, {headers: {
      mylang:language
    }})
      .then(response => response.data);
  }

  // getContent1(data){
  //   const url = `${this.url}`;
  //   const geturl = 'https://jsonplaceholder.typicode.com/posts/2';
  //   const header = {
  //     mylang:data
  //   }
  //   // debugger;
  //   return axios.get(geturl, {headers: header})
  //     .then(response => response.data);
  // }
}
