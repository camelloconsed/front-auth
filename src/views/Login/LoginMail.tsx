import React, { Fragment } from 'react'
import { Col, Navbar, Button, Row, Image, Card, Form } from 'react-bootstrap'
import Logo from './logo-survi.png'

const LoginMail = () => {
  return (
    <Fragment>
      <Row className="bg-white">
        <Col>
          <Navbar bg="white" variant="light">
            <Navbar.Brand>
              <Image src={Logo} width="160" height="30" />
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 bgLogin">
        <Card border="light" className="shadow-sm mt-5">
          <Card.Body>
            <div className="text-center my-5">
              <Card.Title>
                <h5>Inicia Sesión</h5>
              </Card.Title>
              <Card.Text>Ingresa tus datos para comenzar</Card.Text>
            </div>
            <div className="mx-5 clearfix">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <strong>CORREO ELECTRÓNICO</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Ingresa tu correo"
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    <strong>CONTRASEÑA</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                  />
                </Form.Group>
                <div className="text-info float-right mb-5">
                  <p>
                    <small>
                      <a href="#">¿Olvidaste tu contraseña?</a>
                    </small>
                  </p>
                </div>
                <br />
                <div className="float-left mx-3 mb-5">
                  <Button variant="link" type="submit">
                    Crear cuenta
                  </Button>
                </div>
                <div className="float-right mx-3 mb-5">
                  <Button variant="primary" type="submit" className="px-3">
                    Ingresar
                  </Button>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  )
}

export default LoginMail