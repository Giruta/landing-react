import React, { Component } from "react";
import {StyledForm, StyledInput, StyledSection, StyledSelect} from "./style";
import {Col, Container, Form, Row} from "react-bootstrap";
import {StyledButton} from "./style";
import CustomersService from "../../Helpers/CustomersService";

const customersService = new CustomersService();

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
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
      debugger;
      console.log('result = ', result)})
      .catch(e => {
      alert(e.message);
    });

    e.preventDefault();
  }

  render() {
    return (
      <>
        <StyledSection id='signup'>
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} md={12}>
                <h2 className="text-center"> Форма регистрации</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={12} lg={8} xl={8}>
                <StyledForm
                  className="text-center"
                  onSubmit={this.handleSubmit}
                >
                  <h4>Творческие встречи рисования мандал</h4>
                  <Form.Group controlId='formBasicSelect' className='w-100'>
                    <Form.Label className='mt-3 d-block'>Выберите встречу</Form.Label>
                    <StyledSelect id='meet'>
                      <option>-</option>
                      <option value="Встреча от 20.11.2021">Встреча от 20.11.2021</option>
                      <option value="Встреча от 30.11.2021">Встреча от 30.11.2021</option>
                      <option value="Встреча от 30.11.2021">Встреча от 30.11.2021</option>
                    </StyledSelect>
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail' className='w-100'>
                    <Form.Label className='mt-3 d-block'>Введите ваш эл.адрес</Form.Label>
                    <StyledInput id="email" type="email" placeholder="E-mail" />
                  </Form.Group>
                  <Form.Group controlId='formBasicName' className='w-100'>
                    <Form.Label className='mt-3 d-block'>Введите ваше имя</Form.Label>
                    <StyledInput id="name" type="text" placeholder="Имя" />
                  </Form.Group>
                  <Form.Group controlId='formBasicPhone' className='w-100'>
                    <Form.Label className='mt-3 d-block'>Введите ваш телефон</Form.Label>
                    <StyledInput id="phone" type="tel" placeholder="Телефон" />
                  </Form.Group>
                  <Form.Text className="mt-5">
                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
                    и соглашаетесь с <a href="https://skillsup.ua/about/gdpr/">Политикой конфиденциальности</a>
                    и <a href="https://skillsup.ua/about/public-offer/">Договором офертой</a>
                  </Form.Text>
                  <StyledButton type="submit">Отправить</StyledButton>
                </StyledForm>
              </Col>
            </Row>
          </Container>
        </StyledSection>
      </>
    )
  }
}