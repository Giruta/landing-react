import React, {Component, useEffect} from "react";
import {StyledList, StyledSection} from "./style";
import Fader from "../Fader";
import { BsCheckLg } from 'react-icons/bs';
import {Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import mandala from '../../assets/mandala.jpeg';

const Services = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection id="yourself">
        <Container>
          <Row className='text-center'>
            <Fader text='Узнаете себя?'/>
          </Row>
          <Row>
            <Col data-aos='fade-up-right' lg={7}>
              <StyledList>
                <li><BsCheckLg />Рутина поглотила всю жизнь?</li>
                <li><BsCheckLg />Давно не отключалась от проблем?</li>
                <li><BsCheckLg />Мечтали рисовать, но решили, что это сложно и нет таланта?</li>
                <li><BsCheckLg />Хочу здесь и сейчас, художественная школа это долго и некогда.?</li>
              </StyledList>
            </Col>
            <Col data-aos='fade-up-left' lg={5}>
              <Image data-aos='fade-up' src={mandala} alt="draw"/>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  )
}
export default Services;
