import React, { Component } from "react";
import {Col, Container, Form, Nav, Navbar} from "react-bootstrap";
import {StyledHeader, StyledImg, StyledInner, StyledSpan, StyledText, StyledTitle, StyledButton} from './style.js';
import { Parallax } from 'react-parallax';
import { Link } from "react-scroll";

import lectorMain from '../../assets/lectorMain.webp';
import headerBg from '../../assets/headerBg.jpeg';

export default class Header extends Component {

  render() {
    const header = this.props.content;
    return (
      <>
        <Parallax bgImage={headerBg} strength={300}>
          <StyledHeader>
            <Navbar collapseOnSelect expand='md' id="navbar">
              <Container>
                <Navbar.Toggle className='me-auto' aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='me-auto'>
                    <Link
                      className='nav-link'
                      tabIndex='0'
                      role='button'
                      to='leader'
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000}
                    >
                      {header ? header.nav.about : ''}
                    </Link>
                    <Link
                      className='nav-link'
                      tabIndex='0'
                      role='button'
                      to='slider'
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000}
                    >
                      {header ? header.nav.gallery : ''}
                    </Link>
                    <Link
                      className='nav-link'
                      tabIndex='0'
                      role='button'
                      to='timetable'
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000}
                    >
                      {header ? header.nav.program : ''}
                    </Link>
                    <Link
                      className='nav-link'
                      tabIndex='0'
                      role='button'
                      to='reviews'
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000}
                    >
                      {header ? header.nav.reviews : ''}
                    </Link>
                    <Link
                      className='nav-link'
                      tabIndex='0'
                      role='button'
                      to='contact'
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-400}
                      duration={2000}
                    >
                      {header ? header.nav.contacts : ''}
                    </Link>
                  </Nav>
                </Navbar.Collapse>

                <Form>
                  <Form.Group as={Col} controlId="formGridState">
                  <Form.Select
                    id='select'
                    className='select ms-auto'
                    onChange={this.props.onChangeLanguage}
                  >
                    <option value='ru'>🇷🇺 Ru</option>
                    <option value='uk'>🇺🇦 Uk</option>
                    <option value='en'>🇬🇧 En</option>
                  </Form.Select>
                </Form.Group>
                </Form>

              </Container>
            </Navbar>

            <StyledImg
              src={lectorMain}
              alt="lector"
              className='header_img'
            />

            <Container>
              <StyledInner>
                <StyledTitle>{header ? header.inner.title : ''}</StyledTitle>
                <StyledSpan>{header ? header.inner.subtitle : ''}</StyledSpan>
                <StyledText>{header ? header.inner.innerText : ''}</StyledText>
                <StyledButton>
                  <Link
                    to="signup"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    {header ? header.inner.btn : ''}
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
