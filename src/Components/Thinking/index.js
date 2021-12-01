import React, {useEffect} from "react";
import {StyledList, StyledSection} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Thinking = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection id="thinking">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="text-center mb-4">Вы все еще думаете, что наш Урок не для Вас?</h3>
            </Col>
          </Row>
          <Row>
            <Col data-aos='fade-right' lg={6} md={12}>
              <StyledList>
                <li><BsCheckLg />Невозможно нарисовать неправильно. Важен процесс, а не результат
                </li>
                <li><BsCheckLg />Думаете, что творчество - это для детей, и в 30/40/50 лет уже
                  поздно
                  , и друзья засмеют...Но все равно втайне мечтаете о своем первом шедевре!
                </li>
                <li><BsCheckLg />Не знаете как быстро восстановить энергию и порадовать внутреннюю
                  девочку
                </li>
              </StyledList>
            </Col>
            <Col data-aos='fade-left' lg={6} md={12}>
              <StyledList>
                <li><BsCheckLg />Рисование мандалы - легальный способ ничего не делать</li>
                <li><BsCheckLg />Вы хотите сразу прекрасный результат, и у вас нет терпения и
                  возможности учиться годами
                </li>
                <li><BsCheckLg />вам мешают творить страхи: не получится/не умею/руки не от туда
                  растут
                </li>
              </StyledList>
            </Col>
          </Row>
          <Button text='Записаться' />
        </Container>
      </StyledSection>
    </>
  )
}
export default Thinking;
