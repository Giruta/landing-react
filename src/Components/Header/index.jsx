import React, { Component } from "react";
import {Col, Container, Form, Nav, Navbar} from "react-bootstrap";
import {StyledHeader, StyledImg, StyledInner, StyledSpan, StyledText, StyledTitle, StyledButton} from './style.js';
import { Parallax } from 'react-parallax';
import { Link } from "react-scroll";
// import { MDBIcon } from 'mdb-react-ui-kit';

import lectorMain from '../../assets/lectorMain.webp';
import headerBg from '../../assets/headerBg.jpeg';

export default class Index extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={headerBg} strength={300}>
          <StyledHeader>
            <Navbar fixed='top' collapseOnSelect expand='md' id="navbar">
              <Container>
                <Navbar.Toggle className='me-auto' aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='me-auto'>
                    <Nav.Link>
                      <Link
                        to='leader'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000}
                      >
                        О нас
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to='slider'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000}
                      >
                        Галерея
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to='timetable'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000}
                      >
                        Программа курса
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to='reviews'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000}
                      >
                        Отзывы
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to='contact'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-400}
                        duration={2000}
                      >
                        Контакты
                      </Link>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>

                <Form.Group as={Col} controlId="formGridState" className='col-lg-1 col-sm-2 col-6'>
                  <Form.Select
                    id='select'
                    defaultValue="Язык..."
                    className='select ms-auto'
                    onChange={this.props.onChangeLanguage}
                  >
                    <option value='rus'>ru</option>
                    <option value='ukr'>uk</option>
                    <option value='eng'>en</option>
                  </Form.Select>
                </Form.Group>

              </Container>
            </Navbar>

            <StyledImg
              src={lectorMain}
              alt="lector"
              className='header_img'
            />

            <Container>
              <StyledInner>
                <StyledTitle>Мандала</StyledTitle>
                <StyledSpan>творческая встреча</StyledSpan>
                <StyledText>
                  За 30 дней вы поймаете дзен, почувствуете счастье
                  в моменте и создадите шедевр.
                </StyledText>
                <StyledButton>
                  <Link
                    to="signup"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Записаться
                  </Link>
                </StyledButton>
              </StyledInner>
            </Container>

          </StyledHeader>
        </Parallax>
      </>
    )
  }
}
