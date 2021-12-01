import axios from 'axios';

export default class CustomersService{

  constructor(){
    this.protocol = window.location.protocol;
    this.host = window.location.protocol;
    this.port = '';
    const arr = ['127.0.0.1', 'localhost', '0.0.0.0'];

    if (arr.includes(this.host)) {
      this.port = ':8000';
    }
    this.url = this.protocol + '//' + this.host + this.port;
    console.log('this.protocol = ', this.protocol);
    console.log('this.host = ', this.host);
    console.log('this.port = ', this.port);
    console.log('this.url = ', this.url);
  }

  createCustomer(customer){
    const url = `${this.url}/api/customers/`;
    return axios.post(url,customer);
  }
  getContent(data){
    const url = `${this.url}/api/content/`;
    return axios.get(url, data);
  }
}
