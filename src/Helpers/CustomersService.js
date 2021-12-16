import axios from 'axios';

export default class CustomersService{

  constructor(){
    this.protocol = window.location.protocol;
    this.host = window.location.host;
    this.port = '';
    const arr = ['127.0.0.1', 'localhost', '0.0.0.0'];

    if (arr.includes(this.host)) {
      this.port = ':8000';
    }
    this.url = this.protocol + '//' + this.host + this.port;
  }

  createCustomer(customer){
    const url = `${this.url}`;
    // const posturl = 'https://jsonplaceholder.typicode.com/posts';
    const posturl = 'http://127.0.0.1:8000/register';
    return axios.post(posturl,customer);
  }

  getContent(data){
    const url = `${this.url}`;
    // const geturl = 'https://jsonplaceholder.typicode.com/posts/1';
    const geturl = 'http://127.0.0.1:8000/'
    const header = {
      mylang:data
    }
    return axios.get(geturl, {headers: header})
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
