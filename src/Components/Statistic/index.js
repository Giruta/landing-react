import React, {Component, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {StyledButton, StyledNumber, StyledSection} from "./style";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Statistic = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection data-aos='slide-up' id="statistic">
        <Container>
          <Row className='text-center'>
            <Col lg={3} md={6}>
              <StyledNumber><span className="people">7893</span>человека</StyledNumber>
              <p>По всему миру прошли обучение</p>
            </Col>
            <Col lg={3} md={6}>
              <StyledNumber><span className="years">5</span>лет</StyledNumber>
              <p className="statistic_text">Курс существует c 2014 года</p>
            </Col>
            <Col lg={3} md={6}>
              <StyledNumber><span className="time">15</span>минут</StyledNumber>
              <p className="statistic_text">В день и вы достили Дзен</p>
            </Col>
            <Col lg={3} md={6}>
              <StyledNumber><span className="days">30</span>дней</StyledNumber>
              <p className="statistic_text">Займет весь период обучения</p>
            </Col>
          </Row>
          <Button text='Записаться' />
        </Container>
      </StyledSection>
    </>
  )
}
export default Statistic;
