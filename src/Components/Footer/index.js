import React, { Component } from "react";
import {Col, Container, Row} from "react-bootstrap";
import Up from "../Up";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer" className='position-relative'>
          <Container>
            <Row>
              <Col>
                <Up />
                <p>Copyright&copy; 2021 - SkillsUp.com - All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}
