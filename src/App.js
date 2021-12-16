import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/index";
import Services from "./Components/Services";
import Statistic from "./Components/Statistic";
import Leader from "./Components/Leader";
import Thinking from "./Components/Thinking";
import Slider from "./Components/Slider";
import Goals from "./Components/Goals";
import Timetable from "./Components/Timetable";
import Reviews from "./Components/Reviews";
import SignUp from "./Components/SignUp";
import Present from "./Components/Present";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CustomersService from "./Helpers/CustomersService";
import content from "./Helpers/content";

const customersService = new CustomersService();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: '',
      content: null,
      isLoading: false,
    }
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  onChangeLanguage(e) {
    this.setState({
      language: e.target.value,
    })
    const element = e.currentTarget.value;

    const result = customersService.getContent(element)
      .then(response => {
        console.log('you have successfully change language');
        console.log('response.data = ', response);
        this.onChangeContent(response)})
      .catch(e => {
        console.log('There was an error! Please re-check your answers.', e);
      });

    e.preventDefault();
    console.log('result = ', result);
  }

  async componentDidMount() {
    // axios.defaults.headers.common['CLIENT_IP'] = clientIP
    // let self = this;
    this.setState({...this.state, isLoading: true})
    // debugger;
    customersService.getContent()
      .then(response => {
        // debugger;
        console.log("you have successfully get first data", response);
        this.setState({ content: response, isLoading: false })})
      .catch(e => {
        console.log('There was an error! Please re-check your answers.', e);
      });
  }

  onChangeContent(data) {
    this.setState({
      content: data,
    })
  }

  render () {
    const {header, services, statistic, leader, thinking, sliderTitle, goals,
      timetable, reviewsTitle, signup, present, contact, footer} = content;
    // const {header, services, statistic, leader, thinking, sliderTitle, goals,
    //       timetable, reviewsTitle, signup, present, contact, footer} = this.state.content;
    return (
      <>
        <Header
          onChangeLanguage={this.onChangeLanguage}
          onChangeContent={this.onChangeContent}
          content={header}
        />
        <Services content={services} />
        <Statistic content={statistic} />
        <Leader content={leader} />
        <Thinking content={thinking} />
        <Slider content={sliderTitle} />
        <Goals content={goals} />
        <Timetable content={timetable} />
        <Reviews content={reviewsTitle} />
        <SignUp lang={this.state.language} content={this.state.content} />
        <Present content={present} />
        <Contact content={contact} />
        <Footer content={footer} />
      </>
    )
  }
}

export default App;
