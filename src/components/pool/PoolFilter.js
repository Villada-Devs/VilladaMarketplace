import React, { useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import "../../styles/pool/PoolFilter.css"

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey)

  return (

    <button className="button filter-button" type="button" onClick={decoratedOnClick}>
      {children}
    </button>

  );
}

function PoolFilter() {

  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);


  return (

    <Container className="unpadding" fluid>

      <Accordion className="filter-container">

        <Card className="unbackground">

          <Card.Header className="unpadding unbackground filter-header">
            <CustomToggle eventKey="0">Filtros</CustomToggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body className="unpadding">
                  <Form>
                      <Row>

                          <Col lg={3} md={6} sm={12}>
                            <Form.Label className="input-label">Localidad</Form.Label>
                            <Form.Select className="input" aria-label="Default select example">
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Col>

                          <Col lg={3} md={6} sm={12}>
                          <Form.Label className="input-label">Barrio</Form.Label>
                            <Form.Select className="input" aria-label="Default select example">
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Col>

                          <Col lg={3} md={6} sm={12}>
                          <Form.Label className="input-label">Lugares</Form.Label>
                            <Form.Select className="input" aria-label="Default select example">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Col>

                          <Col lg={3} md={6} sm={12}>
                            <Form.Label className="input-label">Dias</Form.Label><br></br>
                            <ToggleButtonGroup className="filter-btn-group" type="checkbox" value={value} onChange={handleChange}>

                              <ToggleButton className="button filter-button-btng" id="tbg-btn-1" value={1}>
                                Lu
                              </ToggleButton>

                              <ToggleButton className="button filter-button-btng" id="tbg-btn-2" value={2}>
                                Ma
                              </ToggleButton>

                              <ToggleButton className="button filter-button-btng" id="tbg-btn-3" value={3}>
                                Mi
                              </ToggleButton>

                              <ToggleButton className="button filter-button-btng" id="tbg-btn-4" value={4}>
                                Ju
                              </ToggleButton>

                              <ToggleButton className=" button filter-button-btng" id="tbg-btn-5" value={5}>
                                Vi
                              </ToggleButton>

                            </ToggleButtonGroup>
                          </Col>

                      </Row>
                  </Form>
            </Card.Body>
          </Accordion.Collapse>

        </Card>

      </Accordion>
    </Container>

  );
}

export default PoolFilter;