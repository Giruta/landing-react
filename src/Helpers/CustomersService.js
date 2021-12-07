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
    console.log('this.url = ', this.url);
  }

  createCustomer(customer){
    const url = `${this.url}`;
    return axios.post(url,customer);
  }

  getContent(data){
    const url = `${this.url}`;
    const header = {
      data
    }
    return axios.get(url, {headers: header})
      .then(response => response.data);
  }
}