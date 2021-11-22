import React, {Component, useEffect} from "react";
import {StyledSection, StyledSubtitle, StyledList} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Goals = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection id="goals">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <h3 className="text-center">Это больше, чем просто рисование</h3>
              <StyledSubtitle className="text-center">
                Эти милые завитушки могут кое-что изменить в вашей жизни
              </StyledSubtitle>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12}>
              <StyledList data-aos='fade-right'>
                <li data-aos='slide-right'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>Средство от хандры и стресса</h5>
                    <p>Суета мегаполиса, "день сурка", хроническая усталость знакомы многим.
                      Рисование мандалы поможет отключить внутренний монолог, снять напряжение
                      и приятно разнообразить будни
                    </p>
                  </div>
                </li>
                <li data-aos='slide-right'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>Развитие правого полушария мозга</h5>
                    <p>Правое полушарие отвечает за интуицию, воображение, способность мечтать
                      и даже заниматься сексом. Мандала дает ему нагрузку и развивает наши
                      творческие способности.
                    </p>
                  </div>
                </li>
              </StyledList>
            </Col>
            <Col lg={6} md={12}>
              <StyledList data-aos='fade-left'>
                <li data-aos='slide-left'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>Стимул начать творить</h5>
                    <p>Творчество делает нашу жизнь яркой, гармоничной и вдохновенной.
                      Техника рисования мандалы проста и доступна каждому, это позволит
                      впустить творчество в свою жизнь и сделать ее более счастливой
                    </p>
                  </div>
                </li>
                <li data-aos='slide-left'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>Победа над внутренним критиком</h5>
                    <p>В процессе обучения мы снимем такие психологические барьеры к творчеству,
                      как излишний перфекционизм, самокритика, зависимость от мнения окружающих
                    </p>
                  </div>
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
export default Goals;
