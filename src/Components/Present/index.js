import React, { Component } from "react";
import {StyledDiv, StyledSection} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../Button";

export default class Present extends Component {
  render() {
    return (
      <>
        <StyledSection id="present">
          <Container>
            <Row className="justify-content-center">
              <StyledDiv>
                <Row className='justify-content-center'>
                  <Col md={10} lg={5}>
                    <h2 className="text-center">Вы можете подарить курс
                      <br/>"Рисование мандалы"
                    </h2>
                  </Col>
                </Row>
                <Button text='Подарить' />
              </StyledDiv>
            </Row>
          </Container>
        </StyledSection>
      </>
    )
  }
}
