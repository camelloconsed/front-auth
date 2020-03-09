import React, { Fragment } from 'react'
import { Col, Navbar, Button, Row, Image, Card, Form } from 'react-bootstrap'
import Logo from './logo-survi.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
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
      <Row className="justify-content-center mt-4 bgLogin">
        <Card border="light" className="shadow-sm my-5">
          <Card.Body>
            <div className="mx-4">
              <div className="text-center my-3">
                <Card.Title>
                  <h5>Crea tu cuenta</h5>
                </Card.Title>
                <div className="mb-5">
                  <Card.Text>
                    Ingresa tu información personal para crear tu cuenta
                  </Card.Text>
                </div>
              </div>
              <div className="mx-4 clearfix">
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>
                      <strong>NOMBRE</strong>
                    </Form.Label>
                    <input
                      required
                      className="form-control"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>
                      <strong>APELLIDO</strong>
                    </Form.Label>
                    <input
                      required
                      className="form-control"
                      type="text"
                      placeholder="Ingresa tus apellidos"
                      name="lastname"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <strong>CORREO ELECTRÓNICO</strong>
                    </Form.Label>
                    <input
                      required
                      className="form-control"
                      type="email"
                      placeholder="Ingresa tu correo electrónico"
                      name="email"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <strong>CONTRASEÑA</strong>
                    </Form.Label>
                    <input
                      required
                      className="form-control"
                      type="password"
                      placeholder="Crea tu contraseña"
                      name="password"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword1">
                    <Form.Label>
                      <strong>CONTRASEÑA</strong>
                    </Form.Label>
                    <input
                      required
                      className="form-control"
                      type="password"
                      placeholder="Repite tu contraseña"
                      name="password"
                    />
                  </Form.Group>

                  <div className="text-muted mb-5">
                    <p>
                      <small>
                        <p>Tu contraseña debe tener entre 8-20 caracteres</p>
                      </small>
                    </p>
                  </div>

                  <div className="float-left mr-4 mb-5">
                    <Link to="/" className="text-light text-decoration-none">
                      <Button variant="link" type="submit">
                        Volver
                      </Button>
                    </Link>
                  </div>
                  <div className="float-right ml-4 mb-5">
                    <Button variant="primary" type="submit" className="px-3">
                      Continuar
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  )
}

export default SignIn
