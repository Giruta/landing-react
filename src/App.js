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
  }

  onChangeContent(data) {
    this.setState({
      content: data,
    })
  }

  render () {
    return (
      <>
        <Header
          onChangeLanguage={this.onChangeLanguage}
          onChangeContent={this.onChangeContent}
        />
        <Services />
        <Statistic />
        <Leader />
        <Thinking />
        <Slider />
        <Goals />
        <Timetable />
        <Reviews />
        <SignUp lang={this.state.language}/>
        <Present />
        <Contact />
        <Footer />
      </>
    )
  }
  async componentDidMount() {
    // axios.defaults.headers.common['CLIENT_IP'] = clientIP
    // let self = this;
    this.setState({...this.state, isLoading: true})
    customersService.getContent()
      .then(response => {
      console.log("you have successfully get first data", response);
      this.setState({ content: response.data, isLoading: false })})
      .catch(e => {
      console.log('There was an error! Please re-check your answers.', e);
    });
  }
}

export default App;