import React, { Component } from "react";
import {StyledForm, StyledInput, StyledSection, StyledSelect} from "./style";
import {Col, Container, Form, Row} from "react-bootstrap";
import {StyledButton} from "./style";
import CustomersService from "../../Helpers/CustomersService";

const customersService = new CustomersService();

const initialState = {
  meet: '',
  email: '',
  name: '',
  phone: '',
  emailError: '',
  nameError: '',
  phoneError: '',
}

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    // debugger;
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  }

  validate = () => {
    let emailError = '';
    let nameError = '';
    let phoneError = '';

    if(!this.state.email.includes('@')) {
      emailError = 'Invalid email';
    }

    if(!this.state.name) {
      nameError = 'name cannot be blank';
    }

    if(!this.state.phone) {
      phoneError = 'phone cannot be blank';
    }

    if(emailError || nameError) {
      this.setState({ emailError, nameError, phoneError });
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const elements = e.currentTarget.elements;
      const vartemp =
        {
          "meet": elements.meet.value,
          "first_name": elements.name.value,
          "email": elements.email.value,
          "phone": elements.phone.value,
          "language": this.props.lang,
        };
      customersService.createCustomer(vartemp)
        .then(result => {
          // debugger;
          console.log('result from post = ', result);
          alert('You have successfully registered')})
        .catch(e => {
          alert(e.message);
        });
      this.setState(initialState);
    }
  }

  render() {
    return (
      <>
        <StyledSection id='signup'>
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} md={12}>
                <h2 className="text-center"> ?????????? ??????????????????????</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={12} lg={8} xl={8}>
                <StyledForm
                  className="text-center"
                  onSubmit={this.handleSubmit}
                >
                  <h4>???????????????????? ?????????????? ?????????????????? ????????????</h4>
                  <Form.Group controlId='formBasicSelect' className='w-100'>
                    <Form.Label className='mt-3 d-block'>???????????????? ??????????????</Form.Label>
                    <StyledSelect
                      id='meet'
                      onChange = {this.handleInputChange}
                      value = {this.state.meet}
                    >
                      <option name='meet' value="">-</option>
                      <option name='meet' value="?????????????? ???? 20.11.2021">?????????????? ???? 20.11.2021</option>
                      <option name='meet' value="?????????????? ???? 30.11.2021">?????????????? ???? 30.11.2021</option>
                      <option name='meet' value="?????????????? ???? 30.11.2021">?????????????? ???? 30.11.2021</option>
                    </StyledSelect>
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail' className='w-100'>
                    <Form.Label className='mt-3 d-block'>?????????????? ?????? ????.??????????</Form.Label>
                    <StyledInput
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      value={this.state.email}
                      onChange = {this.handleInputChange}
                    />
                    <div style={{ fontSize: 12, color: '#964754' }}>
                      {this.state.emailError}
                    </div>
                  </Form.Group>
                  <Form.Group controlId='formBasicName' className='w-100'>
                    <Form.Label className='mt-3 d-block'>?????????????? ???????? ??????</Form.Label>
                    <StyledInput
                      id="name"
                      type="text"
                      placeholder="??????"
                      value={this.state.name}
                      onChange = {this.handleInputChange}
                    />
                    <div style={{ fontSize: 12, color: '#964754' }}>
                      {this.state.nameError}
                    </div>
                  </Form.Group>
                  <Form.Group controlId='formBasicPhone' className='w-100'>
                    <Form.Label className='mt-3 d-block'>?????????????? ?????? ??????????????</Form.Label>
                    <StyledInput
                      id="phone"
                      type="tel"
                      placeholder="??????????????"
                      value={this.state.phone}
                      onChange = {this.handleInputChange}
                    />
                    <div style={{ fontSize: 12, color: '#964754' }}>
                      {this.state.phoneError}
                    </div>
                  </Form.Group>
                  <Form.Text className="mt-5">
                    ?????????????? ???? ????????????, ???? ???????????????????????? ???? ?????????????????? ???????????????????????? ????????????
                    ?? ???????????????????????? ?? <a href="https://skillsup.ua/about/gdpr/">?????????????????? ????????????????????????????????????</a>
                    ?? <a href="https://skillsup.ua/about/public-offer/">?????????????????? ??????????????</a>
                  </Form.Text>
                  <StyledButton type="submit">??????????????????</StyledButton>
                </StyledForm>
              </Col>
            </Row>
          </Container>
        </StyledSection>
      </>
    )
  }
}
