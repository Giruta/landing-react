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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'ru',
    }
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onChangeLanguage(e) {
    this.setState({
      language: e.target.value,
    })
  }
  render () {
    return (
      <>
        <Header onChangeLanguage={this.onChangeLanguage} />
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
}

export default App;
