import React, {Component, useEffect} from "react";
import {
  StyledList,
  StyledCardHeader,
  StyledCardMain,
  StyledContactInfo,
  StyledSection,
  StyledCardContact,
  StyledCardText
} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineMail, AiTwotonePhone, FaFacebook, FaInstagram, FaTelegramPlane} from "react-icons/all";
import Map from "../Map";
import Aos from "aos";
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <h2 className="mb-4 text-center">Контакты</h2>
            </Col>
          </Row>
          <Row>
            <Col data-aos='slide-right' lg={6}>
              <div className="contact_map">
                <Map />
              </div>
            </Col>
            <Col data-aos='slide-left' lg={6} className='mt-4 mt-lg-0'>
              <StyledContactInfo>
                <StyledCardHeader>
                  <StyledList>
                    <li className="me-4">
                      <a href="#" target="_blank"><FaFacebook/></a>
                    </li>
                    <li className="me-4">
                      <a href="#" target="_blank"><FaInstagram/></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><FaTelegramPlane/></a>
                    </li>
                  </StyledList>
                </StyledCardHeader>
                <StyledCardMain className="d-sm-flex">
                  <StyledCardContact>
                    <div className="mb-3">
                      <a className="card_phone" href="tel:+3(048)7562354">
                        <AiTwotonePhone />
                        +38 (048) 756-23-54
                      </a>
                      <a className="card_phone" href="tel:+3(048)7562354">
                        <AiTwotonePhone />
                        +38 (048) 756-23-54
                      </a>
                    </div>
                    <div className="d-flex mb-3">
                      <FaTelegramPlane />
                      <p className='ms-2 mb-0'>
                        65000, Украина, г. Одесса Ул Базарная, 36
                      </p>
                    </div>
                    <a className="card_email" href="email:info@lab-consult.com">
                      <AiOutlineMail className='me-2'/>
                      info@lab-consult.com
                    </a>
                  </StyledCardContact>
                  <StyledCardText>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </StyledCardText>
                </StyledCardMain>
              </StyledContactInfo>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  )
}
export default Contact;
