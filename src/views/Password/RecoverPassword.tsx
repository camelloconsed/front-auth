import React, { Fragment } from 'react'
import { Container, Col, Navbar, Row, Image, Card, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from './../../images/logo-survi.png'

const RecoverPassword = () => {
  return (
    <Fragment>
      <Navbar bg="white" variant="light" className="shadow-sm">
        <Navbar.Brand>
          <Image src={Logo} width="160" height="24" />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col sm="6" className="mx-auto">
            <Alert variant="success" dismissible>
              <p className="mb-0">El enlace fue enviado con éxito</p>
            </Alert>
            <Card className="shadow-sm border-0">
              <Card.Body className="py-5">
                <Form>
                  <Form.Row>
                    <Col sm="8" className="mx-auto">
                      <h5 className="text-center">Recupera tu contraseña</h5>
                      <p className="text-center mb-5">
                        Para recuperar tu contraseña, ingresa el correo electrónico
                        asociado a tu cuenta
                      </p>
                    </Col>
                  </Form.Row>
                  <Form.Row className="mb-4">
                    <Form.Group controlId="formBasicEmail" className="col-sm-8 mx-auto">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Ingresa tu correo" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Col sm="8" className="col-sm-8 mx-auto">
                      <Link className="btn btn-primary btn-block" to="/createpassword">
                        Enviar enlace
                      </Link>
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default RecoverPassword
