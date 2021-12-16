import React, { useEffect } from "react";
import {StyledList, StyledSection} from "./style";
import Fader from "../Fader";
import { BsCheckLg } from 'react-icons/bs';
import {Col, Container, Image, Row} from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';

import mandala from '../../assets/mandala.jpeg';

const Services = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  const services = props.content;
  return (
    <>
      <StyledSection id="yourself">
        <Container>
          <Row className='text-center'>
            <Fader text={services ? services.title : ''}/>
          </Row>
          <Row>
            <Col data-aos='fade-up-right' lg={7}>
              <StyledList>
                <li><BsCheckLg />{services ? services.list.first : ''}</li>
                <li><BsCheckLg />{services ? services.list.second : ''}</li>
                <li><BsCheckLg />{services ? services.list.third : ''}</li>
                <li><BsCheckLg />{services ? services.list.fourth : ''}</li>
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
